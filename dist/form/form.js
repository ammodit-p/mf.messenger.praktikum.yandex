import { inputPartial } from '/inputs/input_login.js';
import { form_tmpl } from "./form_tmpl.js";
inputPartial();
const formCompile = Handlebars.compile(form_tmpl);
const root = document.querySelector(".login-form");
export const form = root.innerHTML = formCompile();
//# sourceMappingURL=form.js.map