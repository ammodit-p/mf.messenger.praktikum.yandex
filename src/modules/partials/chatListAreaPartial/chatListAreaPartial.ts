import Handlebars from 'handlebars';;
import {chatListAreaPartial_tmpl} from "./chatListAreaPartial_tmpl.js";

export function chatListAreaPartial(): void {
    return Handlebars.registerPartial('chatListAreaPartial', chatListAreaPartial_tmpl);
}
