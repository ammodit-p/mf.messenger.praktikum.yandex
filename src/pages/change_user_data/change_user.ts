import Block from "../../classes/classBlock";
import {Change_user_form} from "./change_user_form/change_user_form"
import {change_user_data} from "./change_user_data"
import {change_user_tmpl} from "./change_user_tmpl";
import {events} from "./change_user_events";
import change_user_controller from "./change_user_controller";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import { Indexed } from "../../types";

inputPartial();
export class Change_user extends Block {
	partial: void;
    constructor (props: Indexed = change_user_data) {
		super("div",{events: events}, {form: new Change_user_form ()}, props, change_user_tmpl, "profile");
    }

    componentDidMount () {
      change_user_controller.getuser()
  }
}
