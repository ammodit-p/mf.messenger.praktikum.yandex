
import {Block} from "../../classes/classBlock.js";
import { Chat_list } from "../../modules/chat_list/chat_list.js";
import {Chat_not_chosen} from "../../modules/chat_not_chosen/chat_not_chosen.js"
import {chats_tmpl} from "./chats_tmpl.js"
import {events} from "./chats_events.js"


export class Chats extends Block {
    constructor () {
        super("div", {
            events: events,
            children: {
                chat_list: new Chat_list(),
                chat_body: new Chat_not_chosen()
            },
            data: {}
        }, chats_tmpl, 'chats')
    }
}