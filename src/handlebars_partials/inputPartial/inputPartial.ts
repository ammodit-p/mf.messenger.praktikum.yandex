import * as Handlebars from 'handlebars';
import {input_tmpl} from "./input_tmpl";

export function inputPartial(): void {
    return Handlebars.registerPartial('inputPartial', input_tmpl);
}
