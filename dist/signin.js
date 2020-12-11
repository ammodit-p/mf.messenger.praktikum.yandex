import { formCompile } from "/modules/form/form.js";
import { loginPage_data } from "/modules/data/signinPage_data.js";
const data = loginPage_data;
const root = document.querySelector(".signin-form");
export const form = formCompile(data);
root.innerHTML = form;
//# sourceMappingURL=signin.js.map