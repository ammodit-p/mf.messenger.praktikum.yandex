/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {button_tmpl} from "./button_tmpl.js";

export function buttonPartial(): void {
    return Handlebars.registerPartial('buttonPartial', button_tmpl);
}
