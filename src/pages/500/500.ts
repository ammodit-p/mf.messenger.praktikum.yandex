import Block from "../../classes/classBlock";
import {fiveHundred_tmpl} from "./500_tmpl";
import {events} from "./500_events"


export class FiveHundred extends Block {
    className: string
    constructor (className: string) {
        super("div", {events: events}, fiveHundred_tmpl, "wrapper");
        this.className = className
    }
}
