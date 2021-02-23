import {Block} from "../../classes/classBlock.js";
import {Change_password_form} from "./chage_pass_form/change_pass_form.js"
import {change_password_data} from "./change_password_data.js"
import {change_password_tmpl} from "./change_password_tmpl.js";
import {events} from "./change_password_events.js"


export class Change_password extends Block {
    constructor () {
        super("div", {
            data: change_password_data,
            events: events,
            children: {form: new Change_password_form ()}
        }, change_password_tmpl, 'profile');
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