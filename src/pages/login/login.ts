//
import Block from "../../classes/classBlock";
import {Button} from "../../modules/button/classButton"
import {login_tmpl} from "./login_tmpl";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import {loginPage_data} from "./loginPage_data";
import {events} from "./login_events";
import login_controller from './login_controller'
import { Indexed } from "../../types";


inputPartial();

export class Login extends Block {
	partial: void;
    constructor (props: Indexed = loginPage_data) {
		super("form", events,{button: new Button (props)}, props, login_tmpl, "login_form");
	}

	_getDataFromApi(): void {
		login_controller.getuser()
	}
}
