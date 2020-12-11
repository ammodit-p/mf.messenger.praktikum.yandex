import { profileDataChange_data } from "/modules/data/profileDataChange_data.js";
import { profileChangeCompile } from "/modules/profileChange/profileChange.js";
const data = profileDataChange_data;
const root = document.querySelector("body");
const main = profileChangeCompile(data);
root.innerHTML = main;
//# sourceMappingURL=change_user_data.js.map