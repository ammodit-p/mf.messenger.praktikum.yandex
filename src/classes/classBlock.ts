// import * as Handlebars from 'handlebars';
import {EventBus} from './eventBus';
import {Indexed} from '../types';
import merge from '../funcs/merge';
import {store} from '../store/Store';

interface Meta {
	tagName: string;
	props: Indexed;
	tmpl: string;
	className: string;
	events: Indexed;
	children: Indexed;
}
class Block {
	eventBus: EventBus;
	EVENTS: {
		INIT: string;
		FLOW_CDM: string;
		FLOW_RENDER: string;
		FLOW_CDU: string;
	}

	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_RENDER: 'flow:render',
		FLOW_CDU: 'flow:component-did-update',
	};

	_element: HTMLElement;
	_meta: Meta;
	props: Indexed;
	className: string;
	store: any;


	constructor(tagName: string = 'div', events: Indexed = {}, children: Indexed = {}, props: Indexed = {}, tmpl: string, className: string) {
		const eventBus = new EventBus();
		this._meta = {
			tagName,
			events,
			children,
			props,
			tmpl,
			className,
		};

		this.props = this._meta.props;
		this.store = store;
		this.eventBus = eventBus;
		this.componentDidUpdate = this.componentDidUpdate.bind(this);

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}


	_registerEvents(eventBus: EventBus): void {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	init(): void {
		this._createResources();
		this.eventBus.emit(Block.EVENTS.FLOW_CDM);
	}

	_createResources(): void {
		const {tagName}: Meta = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	_createDocumentElement(tagName: string): HTMLElement {
		const el = document.createElement(tagName);
		el.classList.add(this._meta.className);
		return el;
	}


	_componentDidMount(): void {
		this.componentDidMount();
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
	}

	componentDidMount(): void {
		this._getDataFromApi();
		const propFromStore: any = this.store.get(this._meta.className);
		this.setProps(propFromStore);
		this.store.setStoreObserver(this._meta.className, this.componentDidUpdate);
	}

	_getDataFromApi(): void {}


	_render(): void {
		const block = this.render();

		this._removeEvents();

		this._element.innerHTML = block;

		this._renderChildren();
		this._addEvents();
	}

	_renderChildren(): void {
		const {children} = this._meta;
		Object.keys(children).forEach((childName) => {
			this.element.appendChild(children[childName].getContent());
		});
	}

	render(): string {
		const {data} = this._meta.props;
		const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl);
		return template(data);
	}


	setProps(nextProps: Indexed): void {
		if (!nextProps) {
			return;
		}
		merge(this._meta.props.data, nextProps);
	}

	_componentDidUpdate(): void {
		const propFromStore: any = store.get(this._meta.className);
		this.setProps(propFromStore);
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
	}

	componentDidUpdate(): any | void {
		this._componentDidUpdate();
	}

	_addEvents(): void {
		const {events} = this._meta;
		Object.keys(events).forEach((eventName) => {
			this._element.addEventListener(eventName, events[eventName]);
		});
	}

	_removeEvents(): void {
		const {events} = this._meta;

		Object.keys(events).forEach((eventName) => {
			this._element.removeEventListener(eventName, events[eventName]);
		});
	}


	getContent(): HTMLElement {
		return this.element;
	}
	get element(): HTMLElement {
		return this._element;
	}


	show(): void {
		this.getContent().style.display = 'block';
	}
	hide(): void {
		this.getContent().style.display = 'none';
	}
	delete(): void {
		this.getContent().remove();
	}
}

export default Block;
