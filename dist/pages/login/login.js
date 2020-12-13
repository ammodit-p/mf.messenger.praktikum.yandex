import { Block } from "../../classes/classBlock.js";
import { login_tmpl } from "./login_tmpl.js";
import { inputPartial } from "../../modules/partials/inputPartial/inputPartial.js";
import { loginPage_data } from "../../data/loginPage_data.js";
inputPartial();
export const login = new Block("div", loginPage_data, login_tmpl);
//# sourceMappingURL=login.js.map