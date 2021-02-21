// 
import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";
import {loginPage_data} from "./loginPage_data.js";
import {events} from "./eventListeners.js"


inputPartial();

export class Login extends Block {
    className: string
    constructor () {
        super("form", {
            data :loginPage_data,
            events: events,
            button: new Button ("button", {"text": "Авторизоваться"}, button_tmpl)
        }, login_tmpl);
        this.className = ".wrapper"
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this.className)
        return el;
      }

      _render(): void {
        const block = this.render();

        this._removeEvents()

        this._element.innerHTML = block;
        this._element.appendChild(this.props.button.getContent())

        this._addEvents()
      }
      render(): string {
          const {data} = this.props
        const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this._meta.tmpl)
        return template (data);
      }



      _addEvents() {

          this._element.onsubmit = this.props.events.submit;
          this._element.onblur = this.props.events.blur;
          this._element.onfocus = this.props.events.focus;
          this._element.onclick = this.props.events.signin

}

    _removeEvents() {
        this._element.onsubmit = null
          this._element.onblur = null
          this._element.onfocus = null
          this._element.onclick = null
    }
}