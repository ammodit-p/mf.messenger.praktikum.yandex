import Block from "../../classes/classBlock";
import {Button} from "../../modules/button/classButton"
import {button_tmpl} from "../../modules/button/button_tmpl";
import {signin_tmpl} from "./signin_tmpl";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import {signinPage_data} from "./signinPage_data";
import {events} from "./signin_events"


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

