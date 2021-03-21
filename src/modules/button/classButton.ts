import Block from "../../classes/classBlock";
import { Indexed } from "../../types";
import {button_tmpl} from './button_tmpl';

export class Button extends Block {
		constructor(props: Indexed) {
			super('div', {}, {}, props, button_tmpl, 'button')
		}
  }


