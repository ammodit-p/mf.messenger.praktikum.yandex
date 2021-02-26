
import Block from "../../../classes/classBlock";
import {chatListAreaPartial} from "../../../handlebars_partials/chatListAreaPartial/chatListAreaPartial"
import {chat_list_tmpl} from "./chat_list_tmpl";
import chat_list_controller from "./chat_list_controller"
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
