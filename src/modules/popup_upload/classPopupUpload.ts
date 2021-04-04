import Block from "../../classes/classBlock";
import {Button} from '../button/classButton';
import {popup_upload_tmpl} from './popup_upload_tmpl';


export class PopupUpload extends Block {
	constructor(props: {[k in string]: any}) {
		super('form', {}, {button: new Button(props)}, props, popup_upload_tmpl, 'popup')
	}

	_createDocumentElement(tagName: string): HTMLElement {
		const el = document.createElement(tagName);
		el.classList.add(this._meta.className);
		el.id = this.props.id_element;
		return el;
	}
}
