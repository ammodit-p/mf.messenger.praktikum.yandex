import { Block } from "../../classes/classBlock.js";
import { profilePassChange_data } from "../../data/profilePassChange_data.js";
import { change_password_tmpl } from "./change_password_tmpl.js";
import { profileLinkPartial } from "../../modules/partials/profileLinkPartial/profileLinkPartial.js";
import { profileAvatarPartial } from "../../modules/partials/profileAvatarPartial/profileAvatarPartial.js";
import { inputPartial } from "../../modules/partials/inputPartial/inputPartial.js";
inputPartial();
profileLinkPartial();
profileAvatarPartial();
export const change_password = new Block("div", profilePassChange_data, change_password_tmpl);
//# sourceMappingURL=change_password.js.map