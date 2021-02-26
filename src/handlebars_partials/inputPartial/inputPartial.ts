/// <reference path="../../../node_modules/handlebars/types/index.d.ts" />
import {input_tmpl} from "./input_tmpl";

export function inputPartial(): void {
    return Handlebars.registerPartial('inputPartial', input_tmpl);
}
