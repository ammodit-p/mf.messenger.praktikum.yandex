
import {Block} from '../../../classes/classBlock';
import {chatListAreaPartial} from '../../../handlebars_partials/chatListAreaPartial/chatListAreaPartial'
import {chat_list_tmpl} from './chat_list_tmpl';
import {chat_controller} from '../chat_controller';
chatListAreaPartial()

export class Chat_list extends Block {
	partial: void;
	constructor(props: {[k in string]: any} = {}) {
		super("aside", {}, {}, props, chat_list_tmpl, "chatlist_area");
	}

	_getDataFromApi(): void {
		chat_controller.getchats()
	}
}
