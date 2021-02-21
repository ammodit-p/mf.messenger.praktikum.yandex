import {Block} from "../../classes/classBlock.js";
import {chatListHeaderPartial} from "../../modules/chatListHeaderPartial/chatListHeaderPartial.js";
import {chatListAreaPartial} from "../../modules/chatListAreaPartial/chatListAreaPartial.js";
import {chatHeaderPartial} from "../../handlebars_partials/chatHeaderPartial/chatHeaderPartial.js";
import {chatList_data} from "./chatList_data.js";
import {router} from "../../initialaze.js"
import {choose_a_chat_tmpl} from "./choose_a_chat_tmpl.js";
chatListHeaderPartial();
chatListAreaPartial();
chatHeaderPartial();


export class Choose_a_chat extends Block {
    constructor () {
        super("div", chatList_data, choose_a_chat_tmpl);
    }

    addEvents() {
        const signin: any = document.querySelector(".profile")
        signin.addEventListener('click', (e: any) => {
            e.preventDefault()
            router.go('/profile')})
    }
}
