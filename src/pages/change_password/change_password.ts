import {Block} from "../../classes/classBlock.js";
import {profilePassChange_data} from "./profilePassChange_data.js"
import {change_password_tmpl} from "./change_password_tmpl.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";

import {profileLinkPartial} from "../../modules/profileLinkPartial/profileLinkPartial.js";
import {profileAvatarPartial} from "../../modules/profileAvatarPartial/profileAvatarPartial.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";

inputPartial();
profileLinkPartial();
profileAvatarPartial();
buttonPartial();


export const change_password = new Block ("div", profilePassChange_data, change_password_tmpl);