
// import Handlebars from "handlebars"
import {chatListItemPartial_tmpl} from "./chatListItemPartial_tmpl.js";

export function chatListItemPartial(): void {
    return Handlebars.registerPartial('chatListItemPartial', chatListItemPartial_tmpl);
}
