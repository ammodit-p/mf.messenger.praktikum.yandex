import Block from "../../../classes/classBlock";
import {chat_body_tmpl} from './chat_body_tmpl';

export class Chat_body extends Block {
    constructor(props: {[k in string]: any} = {}) {
		super('main', {}, {}, props, chat_body_tmpl, 'chat_body')
    }
}
