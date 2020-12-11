import { formCompile } from "modules/form/form.js";
import { input_loginPage_data } from "/modules/form/data/input_signinPage_data.js";
const data = input_loginPage_data;
const root = document.querySelector(".signin-form");
export const form = formCompile(data);
root.innerHTML = form;
//# sourceMappingURL=signin.js.map