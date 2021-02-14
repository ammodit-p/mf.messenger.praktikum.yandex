import * as Handlebars from 'handlebars';
import { profile_data_tmpl } from "./profile_data_tmpl.js";
export function profileDataPartial() {
    return Handlebars.registerPartial('profileDataPartial', profile_data_tmpl);
}
//# sourceMappingURL=profileDataPartial.js.map