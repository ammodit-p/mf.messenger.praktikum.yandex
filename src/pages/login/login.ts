//
import Block from "../../classes/classBlock";
import {Button} from "../../modules/button/classButton"
import {button_tmpl} from "../../modules/button/button_tmpl";
import {login_tmpl} from "./login_tmpl";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import {loginPage_data} from "./loginPage_data";
import {events} from "./login_events";
import login_controller from './login_controller'


inputPartial();

export class Login extends Block {
    constructor () {
        super("form", {
            data :loginPage_data,
            events: events,
            children: {button: new Button ("div", {data: {"text": "Авторизоваться"}}, button_tmpl, "login_form_button")}
        }, login_tmpl, "login_form");
	}

	_getDataFromApi(): void {
		login_controller.get()
	}
}
