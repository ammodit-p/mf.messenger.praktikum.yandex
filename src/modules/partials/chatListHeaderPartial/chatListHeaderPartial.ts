
import * as Handlebars from 'handlebars';

import {chatListHeaderPartial_tmpl} from "./chatListHeaderPartial_tmpl.js";

export function chatListHeaderPartial(): void {
    return Handlebars.registerPartial('chatListHeaderPartial', chatListHeaderPartial_tmpl);
}
