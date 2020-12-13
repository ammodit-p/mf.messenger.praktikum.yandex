import { render } from "../../funcs/render.js";
import { signin } from "./signin.js";
import { signinButton } from "../../modules/button/signinButton.js";
import { valdata } from "../../data/valData.js";
render(".wrapper", signin);
render(".for-button", signinButton);
const inputs = document.forms[0];
function isEmpty(inputs) {
    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
            item.classList.add("blue-input-invalid");
            return;
        }
    }
}
function validate(inputs, valdata) {
    for (let item of inputs) {
        if (item.name === "phone") {
            let reg = valdata.tel;
            if (!reg.test(item.value)) {
                item.classList.add("blue-input-invalid");
                return;
            }
        }
        if (item.name === "email") {
            let reg = valdata.email;
            if (!reg.test(item.value)) {
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
form.addEventListener('blur', (e) => {
    e.preventDefault();
    isEmpty(form);
    validate(form, valdata);
});
//# sourceMappingURL=index.js.map