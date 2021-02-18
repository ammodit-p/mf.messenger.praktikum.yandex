import {Block} from "../../classes/classBlock.js";
import {signin_tmpl} from "./signin_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {signinPage_data} from "./signinPage_data.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";
inputPartial();
buttonPartial();

export const signin = new Block ("div", signinPage_data, signin_tmpl);