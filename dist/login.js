import { formCompile } from "/modules/form/form.js";
import { loginPage_data } from "/modules/data/loginPage_data.js";
const data = loginPage_data;
const root = document.querySelector(".login-form");
export const form = formCompile(data);
root.innerHTML = form;
//# sourceMappingURL=login.js.map