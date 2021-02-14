/// <reference path="./../../../../node_modules/handlebars/types/index.d.ts" />;
import {profile_data_tmpl} from "./profile_data_tmpl.js";

export function profileDataPartial(): void {
    return Handlebars.registerPartial('profileDataPartial', profile_data_tmpl);
}
