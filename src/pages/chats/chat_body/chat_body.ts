import Block from '../../../classes/classBlock';
import {chat_body_tmpl} from './chat_body_tmpl';
import {chat_view} from './chat_body_view/chat_body_view';

export class Chat_body extends Block {
    constructor() {
        super('main', {
			data:{},
			children: {chat_view: chat_view}
		}, chat_body_tmpl, 'chat_body')
    }
}
