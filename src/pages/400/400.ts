import Block from "../../classes/classBlock";
import {fourHundred_tmpl} from "./400_tmpl";
import {events} from "./400_events"
import { Indexed } from "../../types";

export class FourHundred extends Block {
    constructor (props: Indexed) {
        super("div", events, {}, props, fourHundred_tmpl, "wrapper");
    }
}
