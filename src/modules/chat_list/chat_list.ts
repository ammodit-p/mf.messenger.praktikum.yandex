
import {Block} from "../../classes/classBlock.js";
import {chatListAreaPartial} from "../../handlebars_partials/chatListAreaPartial/chatListAreaPartial.js"
import {chat_list_tmpl} from "./chat_list_tmpl.js"
chatListAreaPartial()

export class Chat_list extends Block {
    constructor() {
        super("aside", {
          data: {
              "list": [
                  {
                      "avatar": "./img/avatar.png", 
                      "title": "Имя",
                      "chatMessage": "Будет потом",
                      "time": "нет пока",
                      "id": "1",
                      "unread_count": "0"
                  },
                  {
                      "avatar": "./img/avatar.png", 
                      "title": "Чатик",
                      "chatMessage": "Будет потом",
                      "time": "нет пока",
                      "id": "2",
                      "unread_count": "0"
                  }
              ],
          }
      }, chat_list_tmpl, "chatlist_area")
    }
}