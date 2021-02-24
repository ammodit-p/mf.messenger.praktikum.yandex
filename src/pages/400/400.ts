import {Block} from "../../classes/classBlock.js";
import {fourHundred_tmpl} from "./400_tmpl.js";
import {events} from "./400_events.js"

export class FourHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {events: events}, fourHundred_tmpl, "wrapper");
        this.className = className
    }
}