import { EventBus } from "./eventBus.js";
import * as Handlebars from 'handlebars';
export class Block {
    constructor(tagName = "div", props = {}, tmpl) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
            tmpl
        };
        this.eventBus = eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    get element() {
        return this._element;
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    _createDocumentElement(tagName) {
        this._meta.tagName = tagName;
        return document.createElement(this._meta.tagName);
    }
    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount() { }
    _componentDidUpdate(oldProps, newProps) {
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
        this.componentDidUpdate(oldProps, newProps);
    }
    componentDidUpdate(oldProps, newProps) {
        if (oldProps && newProps) {
            return true;
        }
        return false;
    }
    setProps(nextProps) {
        if (!nextProps) {
            return;
        }
        Object.assign(this._meta.props, nextProps);
        this.eventBus.emit(Block.EVENTS.FLOW_CDU);
    }
    ;
    _render() {
        const block = this.render();
        this._element.innerHTML = block;
    }
    render() {
        const template = Handlebars.compile(this._meta.tmpl);
        return template(this._meta.props);
    }
    getContent() {
        return this.element;
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
};
//# sourceMappingURL=classBlock.js.map