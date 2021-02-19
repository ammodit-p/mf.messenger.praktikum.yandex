import {Block} from "../../classes/classBlock.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js"
import {loginPage_data} from "./loginPage_data.js";

inputPartial();
buttonPartial();

export class Login extends Block {
    constructor () {
        super("div", loginPage_data, login_tmpl);
    }

    addEvents() {}
}
