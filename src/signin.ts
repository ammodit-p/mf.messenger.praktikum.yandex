import {formCompile} from "/modules/form/form.js";
import {loginPage_data} from "/modules/data/signinPage_data.js"

const data = loginPage_data;
const root: any = document.querySelector(".signin-form");
export const form: any = formCompile(data)
root.innerHTML = form;