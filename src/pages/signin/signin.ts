import Block from "../../classes/classBlock";
import {Button} from "../../modules/button/classButton"
import {signin_tmpl} from "./signin_tmpl";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import {signinPage_data} from "./signinPage_data";
import {events} from "./signin_events"
import { Indexed } from "../../types";
inputPartial();

export class Signin extends Block {
	partial: void;
    constructor (props: Indexed = signinPage_data) {
		super("form", {events: events}, {button: new Button (props)}, props, signin_tmpl, "signin_form");
    }
}

