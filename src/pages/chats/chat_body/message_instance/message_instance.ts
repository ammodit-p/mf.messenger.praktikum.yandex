import Block from "../../../../classes/classBlock";
import {message_instance_tmpl} from './message_instance_tmpl';


export class MessageInstance extends Block {
    constructor(props: {[k in string]: any}) {
        super('div', {}, {}, props, message_instance_tmpl, 'chat_body_messages_item')
    }
}


