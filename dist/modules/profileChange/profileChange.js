import { profileLinkPartial } from "../partials/profileLinkPartial/profileLinkPartial.js";
import { profileAvatarPartial } from "../partials/profileAvatarPartial/profileAvatarPartial.js";
import { inputPartial } from "../partials/inputPartial/inputPartial.js";
import { profileChange_tmpl } from "./profileChange_tmpl.js";
inputPartial();
profileLinkPartial();
profileAvatarPartial();
export const profileChangeCompile = Handlebars.compile(profileChange_tmpl);
//# sourceMappingURL=profileChange.js.map