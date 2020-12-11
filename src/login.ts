import {formCompile} from "/form/form.js";
import {input_loginPage_data} from "/inputs/input_loginPage_data.js"

const data = input_loginPage_data;
const root: any = document.querySelector(".login-form");
export const form: any = formCompile(data)
root.innerHTML = form;