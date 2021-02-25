
import {Block} from "../../classes/classBlock.js";
import {chatListAreaPartial} from "../../handlebars_partials/chatListAreaPartial/chatListAreaPartial.js"
import {chat_list_tmpl} from "./chat_list_tmpl.js";
import chat_list_controller from "./chat_list_controller.js"
chatListAreaPartial()

export class Chat_list extends Block {
    constructor() {
        super("aside", {
          data: {
          }
      }, chat_list_tmpl, "chatlist_area")
    }

    componentDidMount () {
        chat_list_controller.get()
    }
}