import Block from "../../../../classes/classBlock";
import {chat_body_view_tmpl} from './chat_body_view_tmpl';
import {message_instance} from '../message_instance/message_instance';
import {data} from '../message_instance/message_instance_data';

export class ChatBodyView extends Block {
    constructor() {
        super('main', {
			data:data,
			children: {
				message: message_instance
			}
		}, chat_body_view_tmpl, 'chat_body_view')
	}

	_renderChildren(): void {

	}
}

export const chat_view = new ChatBodyView()
