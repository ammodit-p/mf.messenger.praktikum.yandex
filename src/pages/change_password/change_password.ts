import {Block} from "../../classes/classBlock";
import {Change_password_form} from "./chage_pass_form/change_pass_form"
import {change_password_data} from "./change_password_data"
import {change_password_tmpl} from "./change_password_tmpl";
import {events} from "./change_password_events"
import change_pass_controller from "./change_pass_controller"


export class Change_password extends Block {
    constructor () {
        super("div", {
            data: change_password_data,
            events: events,
            children: {form: new Change_password_form ()}
        }, change_password_tmpl, 'profile');
    }
    componentDidMount () {
      change_pass_controller.get()
  }
}
