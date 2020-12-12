import {chatListHeaderPartial} from "../partials/chatListHeaderPartial/chatListHeaderPartial.js";
import {chatListAreaPartial} from "../partials/chatListAreaPartial/chatListAreaPartial.js";
import {chatListItemPartial} from "../partials/chatListItemPartial/chatListItemPartial.js";
import {chatHeaderPartial} from "../partials/chatHeaderPartial/chatHeaderPartial.js";
import {chatMenuItemPartial} from "../partials/chatMenuItemPartial/chatMenuItemPartial.js";
import {chat_tmpl} from "./chat_tmpl.js";

chatListHeaderPartial();
chatListAreaPartial();
chatListItemPartial();
chatHeaderPartial();
chatMenuItemPartial();

export const chatCompile: any = Handlebars.compile(chat_tmpl);