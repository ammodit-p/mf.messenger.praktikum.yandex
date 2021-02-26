
import {change_user_form_tmpl} from "./change_user_form_tmpl";
import {Button} from "../../../modules/button/classButton";
import {button_tmpl} from "../../../modules/button/button_tmpl";
import {Block} from "../../../classes/classBlock";
import {change_user_data} from "../change_user_data"


export class Change_user_form extends Block {
    constructor() {
        super ("form", 
        {
            data: change_user_data,
            events: {},
            children:{button: new Button ("div", {data: {"text": "Сохранить"}}, button_tmpl, "button")}
        }, change_user_form_tmpl, "user_form")}
  
}
