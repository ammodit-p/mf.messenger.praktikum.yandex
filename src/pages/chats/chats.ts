
import Block from '../../classes/classBlock';
import { Chat_list } from './chat_list/chat_list';
import {Chat_body} from './chat_body/chat_body';
import {PopupForm} from '../../modules/popup_form/classPopupForm';
import {popup_form_tmpl} from '../../modules/popup_form/popup_form_tmpl';
import {Button} from '../../modules/button/classButton';
import {button_tmpl} from '../../modules/button/button_tmpl';
import {chats_tmpl} from './chats_tmpl';
import {events} from './chats_events';
import chat_controller from './chat_controller';


export class Chats extends Block {
    constructor () {
        super('div', {
            events: events,
            children: {
                chat_list: new Chat_list(),
                chat_body: new Chat_body(),
                add_chat: new PopupForm('div', {
                    data: {
                        fieldName: 'title',
                        inputClass: 'input_label',
                        labelValue: 'Название',
                        inputType: 'text',
                        class: 'form_input blue_input',
						form_class: 'add_chat_form',
						id: 'add-chat',
						content: 'Создать чат'
                    },
                    children: {
                        button: new Button ('div', {data: {
							'text': 'Добавить',
						}}, button_tmpl, 'popup_form_button')
                    }

                }, popup_form_tmpl, 'popup')
            },
            data: {}
        }, chats_tmpl, 'chats')
	}

	_getDataFromApi(): void {
		chat_controller.getUser()
	}
}
