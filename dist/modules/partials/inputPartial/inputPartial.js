import * as Handlebars from 'handlebars';
import { input_tmpl } from "./input_tmpl.js";
export function inputPartial() {
    return Handlebars.registerPartial('inputPartial', input_tmpl);
}
//# sourceMappingURL=inputPartial.js.map