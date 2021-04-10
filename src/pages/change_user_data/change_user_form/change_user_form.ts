
import {change_user_form_tmpl} from "./change_user_form_tmpl";
import {Button} from "../../../modules/button/classButton";
import {Block} from "../../../classes/classBlock";


export class Change_user_form extends Block {
    constructor(props: {[k in string]: any}) {
		super ("form", {}, {button: new Button (props)},props, change_user_form_tmpl, "user_form");
	}

}
