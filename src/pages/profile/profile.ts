import {Block} from "../../classes/classBlock";
import {profile_tmpl} from "./profile_tmpl";
import {events} from "./profile_events";
import {profile_controller} from "./profile_controller";
import {PopupUpload} from '../../modules/popup_upload/classPopupUpload';
import {profile_data, changeAvatar} from './profile_data';

export class Profile extends Block {
    constructor (props: {[k in string]: any} = profile_data) {
        super("div", events,{children: new PopupUpload(changeAvatar)}, props, profile_tmpl, "profile");
    }

    _getDataFromApi() {
        profile_controller.getuser()
    }
}
