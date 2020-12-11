import {inputPartial} from '/inputs/input_login.js'
import {form_tmpl} from "./form_tmpl.js";
inputPartial();
const formCompile: any = Handlebars.compile(form_tmpl);
const root: any = document.querySelector(".login-form");
export const form: any = root.innerHTML = formCompile();