import {Block} from "../../classes/classBlock.js";
import {Change_user_form} from "./change_user_form/change_user_form.js"
import {change_user_data} from "./change_user_data.js"
import {change_user_tmpl} from "./change_user_tmpl.js";
import {events} from "./change_user_events.js";
import change_user_controller from "./change_user_controller.js"

import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();



export class Change_user extends Block {
    constructor () {
        super("div", 
        {
            data: change_user_data,
            events: events,
            children:{form: new Change_user_form ()}
        }, change_user_tmpl, "profile");
    }

    componentDidMount () {
      change_user_controller.get()
  }
}