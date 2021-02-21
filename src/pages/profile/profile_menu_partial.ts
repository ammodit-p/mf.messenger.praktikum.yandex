/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {profile_menu_tmpl} from "./profile_menu_tmpl.js";

export function profile_menu_partial(): void {
    return Handlebars.registerPartial('profile_menu_partial', profile_menu_tmpl);
}
