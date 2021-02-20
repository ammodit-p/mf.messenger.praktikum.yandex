/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {profile_menu_tmpl} from "./profile_menu_tmpl.js";

export function profileMenuPartial(): void {
    return Handlebars.registerPartial('profileMenuPartial', profile_menu_tmpl);
}
