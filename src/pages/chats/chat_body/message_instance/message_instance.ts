import Block from "../../../../classes/classBlock";
import {message_instance_tmpl} from './message_instance_tmpl';

class MessageInstance extends Block {
    constructor() {
        super('div', {}, message_instance_tmpl, 'chat_body_messages_item')
    }
}

export const message_instance = new MessageInstance ();
