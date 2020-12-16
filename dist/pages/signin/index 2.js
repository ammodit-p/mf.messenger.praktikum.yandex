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
function focusBlur(inputs) {
    console.log(inputs);
    for (let item of inputs) {
        item.addEventListener('blur', () => {
            isEmpty(form);
        });
        item.addEventListener('focus', () => {
            item.classList.remove("blue-input-invalid");
        });
    }
}
;
focusBlur(inputs);
//# sourceMappingURL=index%202.js.map