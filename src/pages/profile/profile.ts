import {Block} from "../../classes/classBlock.js";
import {profileLinkPartial} from "../../modules/profileLinkPartial/profileLinkPartial.js";
import {profileAvatarPartial} from "../../modules/profileAvatarPartial/profileAvatarPartial.js";
import {profileDataPartial} from "../../modules/profileDataPartial/profileDataPartial.js";
import {profileMenuPartial} from "../../modules/profileMenuPartial/profileMenuPartial.js";
import {profilePage_data} from "./profilePage_data.js"
import {profile_tmpl} from "./profile_tmpl.js";
profileDataPartial();
profileLinkPartial();
profileAvatarPartial();
profileMenuPartial();


export class Profile extends Block {
    constructor () {
        super("div", profilePage_data, profile_tmpl);
    }

    addEvents() {}
}