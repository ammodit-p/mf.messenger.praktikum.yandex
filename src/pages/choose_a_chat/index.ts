import {render} from "../../funcs/render.js";
import {choose_a_chat} from "./choose_a_chat.js";

render (".wrapper", choose_a_chat);

// вот это костыль из-за того что не хватает времени добавить в класс Block  возможность прописывать нужные классы элементу-обертке
const body: any = document.querySelector('.wrapper div');
body.classList.add('chat')


