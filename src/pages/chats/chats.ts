
import Block from "../../classes/classBlock";
import {chats_tmpl} from "./chats_tmpl";
import {events} from "./chats_data";
import {children} from './chats_data';
import chat_controller from './chat_controller';
import { Indexed } from "../../types";



export class Chats extends Block {
    constructor (props: Indexed = {}) {
        super("div", events, children, props, chats_tmpl, 'chats')
	}

	_getDataFromApi(): void {
		chat_controller.getUser()
	}
}
