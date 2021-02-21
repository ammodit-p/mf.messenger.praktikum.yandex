import {Block} from "../../../classes/classBlock.js";
import {Button} from "../../../modules/button/classButton.js"
import {button_tmpl} from "../../../modules/button/button_tmpl.js";
import {change_user_data} from "./change_user_data.js"
import {change_user_tmpl} from "./change_user_tmpl.js";
import {events} from "./change_user_events.js"

import {inputPartial} from "../../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();



export class Change_user extends Block {
    constructor () {
        super("div", 
        {
            data: change_user_data,
            events: events,
            button: new Button ("button", {"text": "Сохранить"}, button_tmpl, ".button")
        }, change_user_tmpl, "");
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