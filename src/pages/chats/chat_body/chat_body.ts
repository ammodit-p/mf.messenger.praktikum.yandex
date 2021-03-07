import Block from "../../../classes/classBlock";
import {chat_body_tmpl} from './chat_body_tmpl';

export class Chat_body extends Block {
    constructor() {
        super('main', {}, chat_body_tmpl, 'chat_body')
    }
}
