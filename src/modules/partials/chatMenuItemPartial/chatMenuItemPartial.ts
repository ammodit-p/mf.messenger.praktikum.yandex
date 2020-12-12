
// import Handlebars from "handlebars"
import {chatMenuItemPartial_tmpl} from "./chatMenuItemPartial_tmpl.js";

export function chatMenuItemPartial(): void {
    return Handlebars.registerPartial('chatMenuItemPartial', chatMenuItemPartial_tmpl);
}
