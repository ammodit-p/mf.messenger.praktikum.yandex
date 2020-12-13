import { Block } from "../../classes/classBlock.js";
import { signin_tmpl } from "./signin_tmpl.js";
import { inputPartial } from "../../modules/partials/inputPartial/inputPartial.js";
import { signinPage_data } from "../../data/signinPage_data.js";
inputPartial();
export const signin = new Block("div", signinPage_data, signin_tmpl);
//# sourceMappingURL=signin.js.map