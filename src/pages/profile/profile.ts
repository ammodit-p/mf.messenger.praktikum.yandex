import {Block} from "../../classes/classBlock.js";
import {profile_fields_partial} from "./profile_fields_partial.js";
import {profile_menu_partial} from "./profile_menu_partial.js";
import {profile_data} from "./profile_data.js"
import {profile_tmpl} from "./profile_tmpl.js";
import {events} from "./profile_eventlisteners.js"
profile_fields_partial();
profile_menu_partial();


export class Profile extends Block {
    constructor () {
        super("div", {
            data: profile_data,
            events: events
        }, profile_tmpl, ".wrapper");
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