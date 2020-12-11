import { profileLinkPartial } from "../partials/profileLinkPartial/profileLinkPartial.js";
import { profileAvatarPartial } from "../partials/profileAvatarPartial/profileAvatarPartial.js";
import { profileDataPartial } from "../partials/profileDataPartial/profileDataPartial.js";
import { profile_tmpl } from "./profile_tmpl.js";
profileDataPartial();
profileLinkPartial();
profileAvatarPartial();
export const profileCompile = Handlebars.compile(profile_tmpl);
//# sourceMappingURL=profile.js.map