import {render} from "../../funcs/render.js";
import {chat} from "./chat.js";

render ("body", chat);

// вот это костыль из-за того что не хватает времени добавить в класс Block  возможность прописывать нужные классы элементу-обертке
const body = document.querySelector('body div');
body.classList.add('chat')


