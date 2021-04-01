import Block from "../../classes/classBlock";
import {profile_tmpl} from "./profile_tmpl";
import {events} from "./profile_events";
import profile_controller from "./profile_controller";
import { Indexed } from "../../types";
import {PopupUpload} from '../../modules/popup_upload/classPopupUpload';
import {profile_data} from './profile_data';


const changeAvatar = {
	fieldName: 'title',
	id_element: "change-avatar",
	content: "Загрузите фото",
	'text': 'Поменять',
}

export class Profile extends Block {
    constructor (props: Indexed = profile_data) {
        super("div", events,{children: new PopupUpload(changeAvatar)}, props, profile_tmpl, "profile");
    }

    async _getDataFromApi() {
        await profile_controller.getuser()
    }
}
