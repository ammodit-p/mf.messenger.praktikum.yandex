/// <reference path="./../../../node_modules/handlebars/types/index.d.ts" />;
import {profile_avatar_tmpl} from "./profile_avatar_tmpl.js";

export function profileAvatarPartial(): void {
    return Handlebars.registerPartial('profileAvatarPartial', profile_avatar_tmpl);
}
