import {Block} from "../../classes/classBlock.js";
import {profileDataChange_data} from "./profileDataChange_data.js"
import {change_user_data_tmpl} from "./change_user_data_tmpl.js";
import {profileLinkPartial} from "../../modules/profileLinkPartial/profileLinkPartial.js";
import {profileAvatarPartial} from "../../modules/profileAvatarPartial/profileAvatarPartial.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";

inputPartial();
buttonPartial();
profileLinkPartial();
profileAvatarPartial();


export const change_user_data = new Block ("div", profileDataChange_data, change_user_data_tmpl);