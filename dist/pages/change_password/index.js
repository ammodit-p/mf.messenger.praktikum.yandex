import { render } from "../../funcs/render.js";
import { change_password } from "./change_password.js";
import { saveButton } from "../../modules/button/saveButton.js";
render(".wrapper", change_password);
render(".for-button", saveButton);
const inputs = document.forms[0];
function isEmpty(inputs) {
    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
            item.classList.add("blue-input-invalid");
            return;
        }
    }
}
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    isEmpty(form);
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
//# sourceMappingURL=index.js.map