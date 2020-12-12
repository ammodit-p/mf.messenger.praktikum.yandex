"use strict";
exports.__esModule = true;
exports.profile_tmpl = void 0;
exports.profile_tmpl = "\n{{>profileLinkPartial}}\n<main class =\"wrapper\">\n{{> profileAvatarPartial}}\n\n<div class=\"profile-user-data\">\n\n{{#each user-item}}\n    {{> profileDataPartial}}\n{{/each}}\n\n</div>\n\n<div class=\"profile-menu\">\n {{# each menu}}\n {{> profileMenuPartial}}\n {{/each}}\n</div>\n</main>";
