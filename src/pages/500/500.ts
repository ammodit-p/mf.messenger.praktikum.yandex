import {Block} from "../../classes/classBlock.js";
import {fiveHundred_tmpl} from "./500_tmpl.js";


export class FiveHundred extends Block {
    constructor () {
        super("div", {}, fiveHundred_tmpl);
    }

    addEvents() {}
}
