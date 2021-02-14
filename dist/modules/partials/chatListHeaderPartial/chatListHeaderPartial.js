import * as Handlebars from 'handlebars';
import { chatListHeaderPartial_tmpl } from "./chatListHeaderPartial_tmpl.js";
export function chatListHeaderPartial() {
    return Handlebars.registerPartial('chatListHeaderPartial', chatListHeaderPartial_tmpl);
}
//# sourceMappingURL=chatListHeaderPartial.js.map