/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {chatListHeaderPartial_tmpl} from "./chatListHeaderPartial_tmpl.js";

export function chatListHeaderPartial(): void {
    return Handlebars.registerPartial('chatListHeaderPartial', chatListHeaderPartial_tmpl);
}
