import * as Handlebars from 'handlebars';
import { profile_avatar_tmpl } from "./profile_avatar_tmpl.js";
export function profileAvatarPartial() {
    return Handlebars.registerPartial('profileAvatarPartial', profile_avatar_tmpl);
}
//# sourceMappingURL=profileAvatarPartial.js.map