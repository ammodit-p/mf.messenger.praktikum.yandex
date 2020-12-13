import {Button} from "../../classes/classBlock.js";
import {button_tmpl} from "./button.js";
import {render} from "../../funcs/render.js";

const button = new Button({
    text: 'Click me',
});

// app — это id дива в корне DOM
render(".app", button);

