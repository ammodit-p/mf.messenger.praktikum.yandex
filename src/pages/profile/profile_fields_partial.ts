/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {profile_fields_tmpl} from "./profile_fields_tmpl.js";

export function profile_fields_partial(): void {
    return Handlebars.registerPartial('profile_fields_partial', profile_fields_tmpl);
}
