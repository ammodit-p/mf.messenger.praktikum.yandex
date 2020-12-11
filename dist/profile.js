import { profilePage_data } from "/modules/data/profilePage_data.js";
import { profileCompile } from "/modules/profile/profile.js";
const data = profilePage_data;
const root = document.querySelector("body");
const main = profileCompile(data);
root.innerHTML = main;
//# sourceMappingURL=profile.js.map