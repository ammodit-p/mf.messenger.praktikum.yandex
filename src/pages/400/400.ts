import {Block} from "../../classes/classBlock.js";
import {fourHundred_tmpl} from "./400_tmpl.js";

export class FourHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {}, fourHundred_tmpl);
        this.className = className
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this.className)
        return el;
      }
}