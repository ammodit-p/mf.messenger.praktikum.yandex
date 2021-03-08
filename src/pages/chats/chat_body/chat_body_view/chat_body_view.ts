import Block from "../../../../classes/classBlock";
import {chat_body_view_tmpl} from './chat_body_view_tmpl';

export class ChatBodyView extends Block {
    constructor() {
        super('main', {data:{}}, chat_body_view_tmpl, 'chat_body_view')
    }
}
