import {Block} from "../../classes/classBlock.js";
import {chatListHeaderPartial} from "../../modules/partials/chatListHeaderPartial/chatListHeaderPartial.js";
import {chatListAreaPartial} from "../../modules/partials/chatListAreaPartial/chatListAreaPartial.js";
import {chatHeaderPartial} from "../../modules/partials/chatHeaderPartial/chatHeaderPartial.js";
import {chatList_data} from "../../data/chatList_data.js";

import {chat_tmpl} from "./chat_tmpl.js";
chatListHeaderPartial();
chatListAreaPartial();
chatHeaderPartial();


export const chat = new Block ("div", chatList_data, chat_tmpl);
