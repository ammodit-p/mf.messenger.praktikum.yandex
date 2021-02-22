
import {change_user_form_tmpl} from "./change_user_form_tmpl.js";
import {Button} from "../../../modules/button/classButton.js";
import {button_tmpl} from "../../../modules/button/button_tmpl.js";
import {Block} from "../../../classes/classBlock.js";
import {change_user_data} from "../change_user_data.js"


export class Change_user_form extends Block {
    constructor() {
        super ("form", 
        {
            data: change_user_data,
            events: {},
            children:{button: new Button ("button", {"text": "Сохранить"}, button_tmpl, ".button")}
        }, change_user_form_tmpl, "form")
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