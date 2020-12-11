import { profilePassChange_data } from "/modules/data/profilePassChange_data.js";
import { profileChangeCompile } from "/modules/profileChange/profileChange.js";
const data = profilePassChange_data;
const root = document.querySelector("body");
const main = profileChangeCompile(data);
root.innerHTML = main;
//# sourceMappingURL=change_password.js.map