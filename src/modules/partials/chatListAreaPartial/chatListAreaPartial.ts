/// <reference path="./../../../../node_modules/handlebars/types/index.d.ts" />;
import {chatListAreaPartial_tmpl} from "./chatListAreaPartial_tmpl.js";

export function chatListAreaPartial(): void {
    return Handlebars.registerPartial('chatListAreaPartial', chatListAreaPartial_tmpl);
}
