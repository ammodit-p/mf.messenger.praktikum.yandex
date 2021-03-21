import Block from "../../classes/classBlock";
import {fiveHundred_tmpl} from "./500_tmpl";
import {events} from "./500_events"
import { Indexed } from "../../types";


export class FiveHundred extends Block {
    constructor (props: Indexed) {
        super("div", {events: events}, {}, props, fiveHundred_tmpl, "wrapper");
    }
}
