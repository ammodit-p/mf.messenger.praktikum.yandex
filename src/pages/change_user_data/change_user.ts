import {Block} from "../../classes/classBlock.js";
import {Change_user_form} from "./change_user_form/change_user_form.js"
import {change_user_data} from "./change_user_data.js"
import {change_user_tmpl} from "./change_user_tmpl.js";
import {events} from "./change_user_events.js"

import {inputPartial} from "../../handlebars_partials/inputPartial/inputPartial.js";

inputPartial();



export class Change_user extends Block {
    constructor () {
        super("div", 
        {
            data: change_user_data,
            events: events,
            children:{form: new Change_user_form ()}
        }, change_user_tmpl, "profile");
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
        const {children = {}} = this.props
        Object.keys(children).forEach(childName => {
            this.element.appendChild(children[childName].getContent())
        })
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