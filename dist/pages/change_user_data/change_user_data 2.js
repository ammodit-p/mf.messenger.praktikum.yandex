import { Block } from "../../classes/classBlock.js";
import { profileDataChange_data } from "../../data/profileDataChange_data.js";
import { change_user_data_tmpl } from "./change_user_data_tmpl.js";
import { profileLinkPartial } from "../../modules/partials/profileLinkPartial/profileLinkPartial.js";
import { profileAvatarPartial } from "../../modules/partials/profileAvatarPartial/profileAvatarPartial.js";
import { inputPartial } from "../../modules/partials/inputPartial/inputPartial.js";
inputPartial();
profileLinkPartial();
profileAvatarPartial();
export const change_user_data = new Block("div", profileDataChange_data, change_user_data_tmpl);
//# sourceMappingURL=change_user_data%202.js.map