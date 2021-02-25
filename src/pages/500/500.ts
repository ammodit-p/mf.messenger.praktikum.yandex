import {Block} from "../../classes/classBlock.js";
import {fiveHundred_tmpl} from "./500_tmpl.js";
import {events} from "./500_events.js"


export class FiveHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {events: events}, fiveHundred_tmpl, "wrapper");
        this.className = className
    }
}
