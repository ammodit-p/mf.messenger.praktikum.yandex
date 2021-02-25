import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {signin_tmpl} from "./signin_tmpl.js";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";
import {signinPage_data} from "./signinPage_data.js";
import {events} from "./signin_events.js"


inputPartial();


export class Signin extends Block {
    constructor () {
        super("form", {
            data :signinPage_data,
            events: events,
            children: {button: new Button ("button", {data:{"text": "Зарегистрироваться"}}, button_tmpl, "signin_form_button")}
        }, signin_tmpl, "signin_form");
    }
}

