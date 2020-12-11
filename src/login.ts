import {formCompile} from "/modules/form/form.js";
import {loginPage_data} from "/modules/data/loginPage_data.js"

const data = loginPage_data;
const root: any = document.querySelector(".login-form");
export const form: any = formCompile(data)
root.innerHTML = form;