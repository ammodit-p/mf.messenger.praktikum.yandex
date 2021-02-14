import Handlebars from 'handlebars';;
import {profile_menu_tmpl} from "./profile_menu_tmpl.js";

export function profileMenuPartial(): void {
    return Handlebars.registerPartial('profileMenuPartial', profile_menu_tmpl);
}
