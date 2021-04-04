import Block from "../../../classes/classBlock";
import {Button} from "../../../modules/button/classButton"
import {change_password_data} from "../change_password_data"
import {change_pass_form_tmpl} from "./change_pass_form_tmpl";
import {inputPartial} from "../../../handlebars_partials/inputPartial/inputPartial";

inputPartial();


export class Change_password_form extends Block {
    constructor (props: {[k in string]: any} = change_password_data) {
        super("form",{}, {
			button: new Button (props)
		}, props, change_pass_form_tmpl, 'pass_form');
		this.props = super.props;
    }
}
