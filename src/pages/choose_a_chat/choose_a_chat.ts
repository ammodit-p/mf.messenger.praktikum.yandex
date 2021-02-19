import {Block} from "../../classes/classBlock.js";
import {chatListHeaderPartial} from "../../modules/chatListHeaderPartial/chatListHeaderPartial.js";
import {chatListAreaPartial} from "../../modules/chatListAreaPartial/chatListAreaPartial.js";
import {chatHeaderPartial} from "../../modules/chatHeaderPartial/chatHeaderPartial.js";
import {chatList_data} from "./chatList_data.js";

import {choose_a_chat_tmpl} from "./choose_a_chat_tmpl.js";
chatListHeaderPartial();
chatListAreaPartial();
chatHeaderPartial();


export class Choose_a_cha extends Block {
    constructor () {
        super("div", chatList_data, choose_a_chat_tmpl);
    }

    addEvents() {}
}
