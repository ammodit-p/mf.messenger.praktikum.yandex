import {Indexed} from "../../types"
import {Block} from "../../classes/classBlock.js";

export class Chat_not_chosen extends Block {
    constructor(tagName: string, props: Indexed, tmpl: string, className: string) {
        super(tagName, props, tmpl, className)
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this._meta.className)
        return el;
      }
}