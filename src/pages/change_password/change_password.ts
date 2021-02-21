import {Block} from "../../classes/classBlock.js";
import {profilePassChange_data} from "./profilePassChange_data.js"
import {change_password_tmpl} from "./change_password_tmpl.js";

import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();


export class Change_password extends Block {
    constructor () {
        super("div", profilePassChange_data, change_password_tmpl);
    }

    addEvents() {}
}