import {Block} from "../../../classes/classBlock.js";
import {Button} from "../../../modules/button/classButton.js"
import {button_tmpl} from "../../../modules/button/button_tmpl.js";
import {change_password_data} from "../change_password_data.js"
import {change_pass_form_tmpl} from "./change_pass_form_tmpl.js";

import {inputPartial} from "../../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();


export class Change_password_form extends Block {
    constructor () {
        super("form", {
            data: change_password_data,
            children:{button: new Button ("div", {data: {"text": "Сохранить"}}, button_tmpl, ".button")}
        }, change_pass_form_tmpl, 'pass_form');
    }
}