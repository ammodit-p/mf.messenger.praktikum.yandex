import {inputPartial} from '../partials/inputPartial/inputPartial.js'
import {form_tmpl} from "./form_tmpl.js";
inputPartial();
export const formCompile: any = Handlebars.compile(form_tmpl);