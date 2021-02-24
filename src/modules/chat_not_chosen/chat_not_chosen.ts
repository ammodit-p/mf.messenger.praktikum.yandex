
import {Block} from "../../classes/classBlock.js";
import {chat_not_chosen_tmpl} from "./chat_not_chosen_tmpl.js"

export class Chat_not_chosen extends Block {
    constructor() {
        super('main', {}, chat_not_chosen_tmpl, 'chat_area')
    }
}