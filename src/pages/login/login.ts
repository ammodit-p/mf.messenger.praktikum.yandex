// 
import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";
import {loginPage_data} from "./loginPage_data.js";
import {events} from "./login_events.js"


inputPartial();

export class Login extends Block {
    constructor () {
        super("form", {
            data :loginPage_data,
            events: events,
            children: {button: new Button ("div", {data: {"text": "Авторизоваться"}}, button_tmpl, "button")}
        }, login_tmpl, "login_form");
    }
}