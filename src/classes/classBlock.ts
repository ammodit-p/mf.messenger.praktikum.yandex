/// <reference path="./../../node_modules/handlebars/types/index.d.ts" />
import {EventBus} from "./eventBus.js";
import {Indexed} from "../types";
import {merge} from "../funcs/merge.js"

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
  props: any


  constructor(tagName: string = "div", props: Indexed = {}, tmpl: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      tmpl
    };
    this.props = this._makePropsProxy(this._meta.props)
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

  init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _createResources(): void {
    const { tagName }: Meta = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }


  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}


  _render(): void {
    const block = this.render();
    this._element.innerHTML = block;
  }
  render(): string {
    const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl)
    return template (this._meta.props);
  }


  _makePropsProxy (props: Indexed) {

    return new Proxy(props, {
      get(target, prop: string) {
        return target[prop]
      },
      ownKeys(target) {
        return Object.keys(target)
    },
      getOwnPropertyDescriptor(target, name) {
        const proxy = this;
        return { get value() { return proxy.get(target, name); }, configurable: true, enumerable: true };
      },
      set(target, prop: string, value) {
        target[prop] = value
        this.eventBus.emit(Block.EVENTS.FLOW_CDU)
        return true
      }
    })
  }


  setProps (nextProps: Indexed): void {
    if (!nextProps) {
      return;
    }

    merge(this._meta.props, nextProps);
  };

  _componentDidUpdate(_oldProps:Indexed, _newProps: Indexed): void {
    this.componentDidUpdate(_oldProps, _newProps);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(_oldProps: Indexed, _newProps: Indexed): any | void {}



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