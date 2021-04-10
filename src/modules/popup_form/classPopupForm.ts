import {Block} from "../../classes/classBlock"
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial";
import {Button} from '../button/classButton';
import {popup_form_tmpl} from './popup_form_tmpl';


inputPartial();

export class PopupForm extends Block {
	constructor(props: {[k in string]: any}) {
		super('form', {}, {button: new Button(props)}, props, popup_form_tmpl, 'popup')
	}

	_createDocumentElement(tagName: string): HTMLElement {
		const el = document.createElement(tagName);
		el.classList.add(this._meta.className);
		el.id = this.props.id_element
		return el;
	}
}
