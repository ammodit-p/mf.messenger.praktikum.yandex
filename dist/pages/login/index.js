import { render } from "../../funcs/render.js";
import { login } from "./login.js";
import { loginButton } from "../../modules/button/loginButton.js";
import { valdata } from "../../data/valData.js";
render(".wrapper", login);
render(".for-button", loginButton);
const inputs = document.forms[0];
function isEmpty(inputs) {
    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
            console.log("im here");
            item.classList.add("blue-input-invalid");
            return;
        }
    }
}
function validate(inputs, valdata) {
    for (let item of inputs) {
        if (item.name === "login") {
            let val = validate.login;
            if (val !== item.value) {
                item.classList.add("blue-input-invalid");
                return;
            }
        }
        if (item.name === "password") {
            let val = validate.password;
            if (val !== item.value) {
                console.log("im here");
                item.classList.add("blue-input-invalid");
                return;
            }
        }
    }
}
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    isEmpty(form);
    validate(form, valdata);
});
//# sourceMappingURL=index.js.map