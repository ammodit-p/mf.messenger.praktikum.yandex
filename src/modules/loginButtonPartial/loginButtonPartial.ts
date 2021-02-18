/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {button_tmpl} from "../button/button_tmpl.js";

export function loginButtonPartial(): void {
    return Handlebars.registerPartial('loginButtonPartial', button_tmpl);
}
