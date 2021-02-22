import {Block} from "../../classes/classBlock.js";
import {fourHundred_tmpl} from "./400_tmpl.js";
import {events} from "./400_events.js"

export class FourHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {events: events}, fourHundred_tmpl, ".wrapper");
        this.className = className
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this.className)
        return el;
      }

      _render(): void {
        const block = this.render();

        this._removeEvents()

        this._element.innerHTML = block;

        this._addEvents()
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
}