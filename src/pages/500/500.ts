import {Block} from "../../classes/classBlock.js";
import {fiveHundred_tmpl} from "./500_tmpl.js";


export class FiveHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {}, fiveHundred_tmpl, "wrapper");
        this.className = className
    }
}
