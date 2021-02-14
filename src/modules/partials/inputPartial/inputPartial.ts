
import * as Handlebars from 'handlebars';
import {input_tmpl} from "./input_tmpl.js";

export function inputPartial(): void {
    return Handlebars.registerPartial('inputPartial', input_tmpl);
}
