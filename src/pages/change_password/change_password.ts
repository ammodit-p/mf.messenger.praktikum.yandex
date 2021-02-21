import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {change_password_data} from "./change_password_data.js"
import {change_password_tmpl} from "./change_password_tmpl.js";
import {events} from "./change_password_events.js"

import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();


export class Change_password extends Block {
    constructor () {
        super("div", {
            data: change_password_data,
            events: events,
            button: new Button ("button", {"text": "Сохранить"}, button_tmpl, ".button")
        }, change_password_tmpl, '.wrapper');
    }

    addEvents() {}
}