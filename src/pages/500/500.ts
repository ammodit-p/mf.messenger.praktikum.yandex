import {Block} from "../../classes/classBlock.js";
import {fiveHundred_tmpl} from "./500_tmpl.js";


export class FiveHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {}, fiveHundred_tmpl);
        this.className = className
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this.className)
        return el;
      }
}
