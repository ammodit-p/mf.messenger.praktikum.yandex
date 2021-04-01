import Block from "../../../../classes/classBlock";
import { Indexed } from "../../../../types";
import {chat_body_view_tmpl} from './chat_body_view_tmpl';

export class ChatBodyView extends Block {
    constructor(props: Indexed = {}) {
        super('main', {}, {}, props, chat_body_view_tmpl, 'chat_body_view')
	}

	_renderChildren(): void {

	}
}

export const chat_view = new ChatBodyView()
