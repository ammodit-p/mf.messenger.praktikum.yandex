
import Block from "../../classes/classBlock";
import { Chat_list } from "./chat_list/chat_list";
import {Chat_body} from "./chat_body/chat_body";
import {PopupForm} from "../../modules/popup_form/classPopupForm";
import {chats_tmpl} from "./chats_tmpl";
import {events} from "./chats_events";
import chat_controller from './chat_controller';
import { Indexed } from "../../types";
import {PopupUpload} from '../../modules/popup_upload/classPopupUpload';

const changeAvatar = {
	fieldName: 'title',
	id_element: "change-avatar",
	content: "Загрузите фото",
	'text': 'Поменять',
}

const addChatPopup: Indexed = {
    fieldName: 'title',
    inputClass: 'input_label',
    labelValue: 'Название',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "add_chat_form",
    id_element: "add-chat",
    content: "Создать чат",
    'text': 'Добавить',
}

const addUserPopup: Indexed = {
    fieldName: 'login',
    inputClass: 'input_label',
    labelValue: 'Логин',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "add_user_form",
    id_element: "add-user",
    content: "Добавить пользователя",
    'text': 'Добавить',
}

const deleteUserPopup: Indexed = {
	fieldName: 'login',
    inputClass: 'input_label',
    labelValue: 'Логин',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "delete_user_form",
    id_element: "delete-user",
    content: "Удалить пользователя",
    'text': 'Удалить',
}


export class Chats extends Block {
    constructor (props: Indexed = {}) {
        super("div", events, {
			chat_list: new Chat_list(),
			chat_body: new Chat_body(),
			add_chat: new PopupForm(addChatPopup),
			add_user: new PopupForm(addUserPopup),
			delete_user: new PopupForm(deleteUserPopup),
			change_avatar: new PopupUpload(changeAvatar),
		}, props, chats_tmpl, 'chats')
	}

	_getDataFromApi(): void {
		chat_controller.getUser()
	}
}
