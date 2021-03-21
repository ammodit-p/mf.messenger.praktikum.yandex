
import {change_user_form_tmpl} from "./change_user_form_tmpl";
import {Button} from "../../../modules/button/classButton";
import Block from "../../../classes/classBlock";
import {change_user_data} from "../change_user_data"
import { Indexed } from "../../../types";


export class Change_user_form extends Block {
    constructor(props: Indexed = change_user_data) {
        super ("form", {}, {button: new Button (props)},props, change_user_form_tmpl, "user_form")}

}
