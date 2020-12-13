import {Block} from "../../classes/classBlock.js";

import {profileDataChange_data} from "../../data/profileDataChange_data.js";

import {chat_tmpl} from "./chat_tmpl.js";



export const chat = new Block ("div", profileDataChange_data, chat_tmpl);