import {Block} from "../../classes/classBlock.js";
import {fourHundred_tmpl} from "./400_tmpl.js";

export class FourHundred extends Block {
    constructor () {
        super("div", {}, fourHundred_tmpl);
    }

    addEvents() {}
}