
// import Handlebars from "handlebars"
import {input_login_tmpl} from "./input_login_tmpl.js";

export function inputPartial(): void {
    return Handlebars.registerPartial('inputPartial', input_login_tmpl);
}
