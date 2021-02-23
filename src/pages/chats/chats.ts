import {Indexed} from "../../types"
import {Block} from "../../classes/classBlock.js";
import {merge} from "../../funcs/merge.js"
import { Chat_list } from "../../modules/chat_list/chat_list.js";
import {Chat_not_chosen} from "../../modules/chat_not_chosen/chat_not_chosen.js"
import {chat_not_chosen_tmpl} from "../../modules/chat_not_chosen/chat_not_chosen_tmpl.js"
import {chats_tmpl} from "./chats_tmpl.js"
import {chat_list_tmpl} from "../../modules/chat_list/chat_list_tmpl.js";
import {events} from "./chats_events.js"


export class Chats extends Block {
    constructor () {
        super("div", {
            events: events,
            children: {
                chat_list: new Chat_list("aside", {
                    data: {
                        "list": [
                            {
                                "imgSrc": "./img/avatar.png", 
                                "chatName": "Имя",
                                "chatMessage": "Что-то в чатике",
                                "time": "11:11",
                            },
                            {
                                "imgSrc": "./img/avatar.png", 
                                "chatName": "Чатик",
                                "chatMessage": "Привет! Смотри, тут всплыл интересный кусок лунной...",
                                "time": "11:50",
                                "unread": "3",
                                "chosen": "chosen"
                            }
                        ],
                    }
                }, chat_list_tmpl, "chatlist_list"),
                chat_body: new Chat_not_chosen('main', {}, chat_not_chosen_tmpl, 'chat_area')
            },
            data: {}
        }, chats_tmpl, 'chats')
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

    setProps (nextProps: Indexed): void {
        if (!nextProps) {
          return;
        }
    
        merge(this._meta.props, nextProps);
        const {children = {}} = this.props.children
        Object.keys(children).forEach(childName => {
            children[childName].setProps()
        })
      };
}