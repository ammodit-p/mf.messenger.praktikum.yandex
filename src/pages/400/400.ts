import {Block} from "../../classes/classBlock";
import {fourHundred_tmpl} from "./400_tmpl";
import {events} from "./400_events";

export class FourHundred extends Block {
    constructor (props: {[k in string]: any}) {
        super("div", events, {}, props, fourHundred_tmpl, "wrapper");
    }
}
