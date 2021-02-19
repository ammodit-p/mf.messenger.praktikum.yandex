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


export class Change_user_data extends Block {
    constructor () {
        super("div", profileDataChange_data, change_user_data_tmpl);
    }

    addEvents() {}
}