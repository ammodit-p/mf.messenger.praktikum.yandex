import {Block} from "../../../classes/classBlock.js";
import {Button} from "../../../modules/button/classButton.js"
import {button_tmpl} from "../../../modules/button/button_tmpl.js";
import {change_password_data} from "../change_password_data.js"
import {change_pass_form_tmpl} from "./change_pass_form_tmpl.js";

import {inputPartial} from "../../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();


export class Change_password_form extends Block {
    constructor () {
        super("form", {
            data: change_password_data,
            children:{button: new Button ("button", {"text": "Сохранить"}, button_tmpl, ".button")}
        }, change_pass_form_tmpl, 'pass_form');
    }


    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this._meta.className)
        return el;
      }
    
      _render(): void {
        const block = this.render();


        this._element.innerHTML = block;
        const {children = {}} = this.props
        Object.keys(children).forEach(childName => {
            this.element.appendChild(children[childName].getContent())
        })

      }
      render(): string {
        const {data} = this.props
        const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl)
        return template (data);
      }
}