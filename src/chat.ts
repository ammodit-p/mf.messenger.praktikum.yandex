import {chatList_data} from "/modules/data/chatList_data.js"
import {chatCompile} from "/modules/chat/chat.js";

const data = chatList_data;

const root: T = document.querySelector("body");

const main: T = chatCompile(data)

root.innerHTML = main;