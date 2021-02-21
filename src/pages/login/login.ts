// 
import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";
import {loginPage_data} from "./loginPage_data.js";
import {render} from "../../funcs/render.js"
import {events} from "./eventListeners.js"


inputPartial();

export class Login extends Block {
    className: string
    constructor () {
        super("div", {
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
        const {button} = this.props
        render('.for-button', button)

        this._addEvents()
      }
      render(): string {
          const {data} = this.props
        const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(this.props.tmpl)
        return template (data);
      }

      _addEvents() {
        const {events = {}} = this.props;
          this._element.onsubmit = events.submit;
          this._element.onblur = events.blur;
          this._element.onfocus = events.focus;

}

    _removeEvents() {
        this._element.onsubmit = null
          this._element.onblur = null
          this._element.onfocus = null
    }
}