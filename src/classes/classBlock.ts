import {EventBus} from "./eventBus.js";

export class Block {
  eventBus: any
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

  _element: any;
  _meta: any;


  constructor(tagName: string = "div", props: {} = {}, tmpl: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      tmpl
    };

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  get element(): void {
    return this._element;
  }

  _createResources(tagName: string): void {
    this._element = this._createDocumentElement(tagName);
  }

  _createDocumentElement(tagName: string): void {
    this._meta.tagName = tagName
    return document.createElement(this._meta.tagName);
  }


  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  _componentDidUpdate(oldProps:any, newProps: any): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    const response = this.componentDidUpdate(oldProps, newProps);
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
      return true;
  }


  setProps (nextProps: any): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this._meta.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU)
  };

 

  _render(): any {
    const block = this.render();

    this._element.innerHTML = block;
  }


  render(): any {
    const template: any = Handlebars.compile(this._meta.tmpl)
    return template (this._meta.props);
  }

  getContent(): any {
    return this.element;
  }
 

  show(): any {
    this.getContent().style.display = "block";
  }

  hide(): any {
    this.getContent().style.display = "none";
  }
}