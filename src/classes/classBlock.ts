/// <reference path="./../../node_modules/handlebars/types/index.d.ts" />
import {EventBus} from "./eventBus.js";
import {Indexed} from "../types";

interface Meta {
  tagName: string;
  props: Indexed;
  tmpl: string
}
export class Block {
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


  constructor(tagName: string = "div", props: Indexed = {}, tmpl: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      tmpl
    };

    this.eventBus =  eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  get element(): HTMLElement {
    return this._element;
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
    this._meta.tagName = tagName
    return document.createElement(this._meta.tagName);
  }


  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  _componentDidUpdate(_oldProps:any, _newProps: any): void {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    this.componentDidUpdate(_oldProps, _newProps);
  }

  componentDidUpdate(_oldProps: any, _newProps: any): any | void {
    this.addEvents()
  }

  addEvents() {
    return
  }

  setProps (nextProps: any): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this._meta.props, nextProps);
    this.eventBus.emit(Block.EVENTS.FLOW_CDU)
  };

 

  _render(): void {
    const block = this.render();
    this._element.innerHTML = block;
  }


  render(): string {
    const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl)
    return template (this._meta.props);
  }

  getContent(): HTMLElement {
    return this.element;
  }
 

  show(): void {
    this.getContent().style.display = "block";
  }

  hide(): void {
    this.getContent().style.display = "none";
  }

  delete (): void {

  }
}