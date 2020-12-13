import { render } from "../../funcs/render.js";
import { change_password } from "./change_password.js";
import { saveButton } from "../../modules/button/saveButton.js";
render(".wrapper", change_password);
render(".for-button", saveButton);
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
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    isEmpty(form);
});
//# sourceMappingURL=index.js.map