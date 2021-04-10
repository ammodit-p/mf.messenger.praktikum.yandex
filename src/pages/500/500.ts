import {Block} from "../../classes/classBlock";
import {fiveHundred_tmpl} from "./500_tmpl";
import {events} from "./500_events";


export class FiveHundred extends Block {
    constructor (props: {[k in string]: any}) {
        super("div", events, {}, props, fiveHundred_tmpl, "wrapper");
    }
}
