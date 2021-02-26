/// <reference path="./../../node_modules/handlebars/types/index.d.ts" />
import {EventBus} from "./eventBus";
import {Indexed} from "../types";
import {merge} from "../funcs/merge"
import {store} from "../store/Store"

interface Meta {
  tagName: string;
  props: Indexed;
  tmpl: string;
  className: string
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
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };

  _element: HTMLElement;
  _meta: Meta;
  props: any;
  className: string;


  constructor(tagName: string = "div", props: Indexed = {}, tmpl: string, className: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      tmpl,
      className
    };

    this.props = this._meta.props

    this.eventBus =  eventBus;
    this.componentDidUpdate = this.componentDidUpdate.bind(this)

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  

  _registerEvents(eventBus: EventBus) {
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
    const { tagName }: Meta = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _createDocumentElement(tagName: string): HTMLElement {
    const el = document.createElement(tagName);
    el.classList.add(this._meta.className)
    return el;
  }


  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}


  _render(): void {
    const block = this.render();

    this._removeEvents()

    this._element.innerHTML = block;
    const {children = {}} = this.props
    Object.keys(children).forEach(childName => {
        this.element.appendChild(children[childName].getContent())
    })

    this._addEvents()
  }

  render(): string {
    const propFromStore: any = store.get(this._meta.className)
    this.setProps(propFromStore)
    store.setStoreObserver(this._meta.className, this.componentDidUpdate)
    const {data} = this._meta.props
    const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl)
    return template (data);
  }


  setProps (nextProps: Indexed): void {
    if (!nextProps) {
      return;
    }

    merge(this._meta.props, nextProps);
  };

  _componentDidUpdate(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(): any | void {
    this.delete()
    this._componentDidUpdate()
  }

  _addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });

}

_removeEvents() {
  const {events = {}} = this.props;

  Object.keys(events).forEach(eventName => {
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
    this.getContent().style.display = "block";
  }
  hide(): void {
    this.getContent().style.display = "none";
  }
  delete (): void {
    this.getContent().remove()
  }
}

export default Block
