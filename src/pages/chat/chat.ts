import {Block} from "../../classes/classBlock.js";
import {chatListHeaderPartial} from "../../handlebars_partials/chatListHeaderPartial/chatListHeaderPartial.js";
import {chatListAreaPartial} from "../../handlebars_partials/chatListAreaPartial/chatListAreaPartial.js";
import {chatHeaderPartial} from "../../handlebars_partials/chatHeaderPartial/chatHeaderPartial.js";
import {chatList_data} from "./chatList_data.js";


import {chat_tmpl} from "./chat_tmpl.js";
chatListHeaderPartial();
chatListAreaPartial();
chatHeaderPartial();

export class Chat extends Block {
    constructor () {
        super("div", chatList_data, chat_tmpl, ".wrapper");
    }

    addEvents() {
    
    }
}