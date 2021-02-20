import {Block} from "../../classes/classBlock.js";
import {profileDataPartial} from "../../modules/profileDataPartial/profileDataPartial.js";
import {profileMenuPartial} from "./profileMenuPartial.js";
import {profilePage_data} from "./profilePage_data.js"
import {profile_tmpl} from "./profile_tmpl.js";
profileDataPartial();
profileMenuPartial();


export class Profile extends Block {
    constructor () {
        super("div", profilePage_data, profile_tmpl);
    }

    addEvents() {}
}