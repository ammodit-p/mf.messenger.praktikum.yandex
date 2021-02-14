import Handlebars from 'handlebars';;
import {chatHeaderPartial_tmpl} from "./chatHeaderPartial_tmpl.js";

export function chatHeaderPartial(): void {
    return Handlebars.registerPartial('chatHeaderPartial', chatHeaderPartial_tmpl);
}
