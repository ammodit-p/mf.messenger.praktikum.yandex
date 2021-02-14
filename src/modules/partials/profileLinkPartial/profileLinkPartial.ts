import Handlebars from 'handlebars';;
import {profile_link_tmpl} from "./profile_link_tmpl.js";

export function profileLinkPartial(): void {
    return Handlebars.registerPartial('profileLinkPartial', profile_link_tmpl);
}
