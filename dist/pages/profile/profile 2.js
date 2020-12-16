import { Block } from "../../classes/classBlock.js";
import { profileLinkPartial } from "../../modules/partials/profileLinkPartial/profileLinkPartial.js";
import { profileAvatarPartial } from "../../modules/partials/profileAvatarPartial/profileAvatarPartial.js";
import { profileDataPartial } from "../../modules/partials/profileDataPartial/profileDataPartial.js";
import { profileMenuPartial } from "../../modules/partials/profileMenuPartial/profileMenuPartial.js";
import { profilePage_data } from "../../data/profilePage_data.js";
import { profile_tmpl } from "./profile_tmpl.js";
profileDataPartial();
profileLinkPartial();
profileAvatarPartial();
profileMenuPartial();
export const profile = new Block("div", profilePage_data, profile_tmpl);
//# sourceMappingURL=profile%202.js.map