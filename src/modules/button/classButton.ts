import Block from "../../classes/classBlock";
import {button_tmpl} from './button_tmpl';

export class Button extends Block {
	constructor(props: {[k in string]: any}) {
		super('div', {}, {}, props, button_tmpl, 'button')
	}
}
