import Block from "../../classes/classBlock";
import {Change_password_form} from "./chage_pass_form/change_pass_form"
import {change_password_data} from "./change_password_data"
import {change_password_tmpl} from "./change_password_tmpl";
import {events} from "./change_password_events"
import change_pass_controller from "./change_pass_controller"
import { Indexed } from "../../types";


export class Change_password extends Block {
    constructor (props: Indexed = change_password_data) {
        super("div", events,
		{
			form: new Change_password_form ()
		}, props, change_password_tmpl, 'profile');
    }
    componentDidMount () {
      change_pass_controller.getuser()
  }
}
