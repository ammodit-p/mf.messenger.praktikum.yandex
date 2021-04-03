import Block from "../../../classes/classBlock";
import { Indexed } from "../../../types";
import {chat_body_tmpl} from './chat_body_tmpl';
import {ChatBodyView} from './chat_body_view/chat_body_view';

export class Chat_body extends Block {
    constructor(props: Indexed = {}) {
		super('main', {}, {chat_view: new ChatBodyView(props)}, props, chat_body_tmpl, 'chat_body')
    }
}
