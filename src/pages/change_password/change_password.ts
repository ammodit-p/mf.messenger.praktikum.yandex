import {Block} from "../../classes/classBlock.js";
import {profilePassChange_data} from "./profilePassChange_data.js"
import {change_password_tmpl} from "./change_password_tmpl.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";

import {inputPartial} from "../../modules/inputPartial/inputPartial.js";

inputPartial();
buttonPartial();


export class Change_password extends Block {
    constructor () {
        super("div", profilePassChange_data, change_password_tmpl);
    }

    addEvents() {}
}