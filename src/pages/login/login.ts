// 
import {Block} from "../../classes/classBlock.js";
import {Button} from "../../modules/button/classButton.js"
import {button_tmpl} from "../../modules/button/button_tmpl.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";
import {loginPage_data} from "./loginPage_data.js";
import {events} from "./login_events.js"


inputPartial();

export class Login extends Block {
    constructor () {
        super("form", {
            data :loginPage_data,
            events: events,
            button: new Button ("div", {"text": "Авторизоваться"}, button_tmpl, ".button")
        }, login_tmpl, ".wrapper");
    }
    _createDocumentElement(tagName: string): HTMLElement {
        const el = document.createElement(tagName);
        el.classList.add(this._meta.className)
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

        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
          this._element.addEventListener(eventName, events[eventName]);
        });

}

    _removeEvents() {
      const {events = {}} = this.props;

      Object.keys(events).forEach(eventName => {
        this._element.removeEventListener(eventName, events[eventName]);
      });
    }
}