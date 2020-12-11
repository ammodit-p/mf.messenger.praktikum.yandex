import {inputPartial} from '/inputs/input.js'
import {form_tmpl} from "./form_tmpl.js";
inputPartial();
export const formCompile: any = Handlebars.compile(form_tmpl);