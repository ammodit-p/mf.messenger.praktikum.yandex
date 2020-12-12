"use strict";
exports.__esModule = true;
exports.profileChange_tmpl = void 0;
exports.profileChange_tmpl = "\n{{>profileLinkPartial}}\n<main class =\"wrapper\">\n{{> profileAvatarPartial}}\n\n<form>\n<div class=\"profile-user-data\">\n\n{{#each inputs}}\n    <div class=\"profile-user-item\">\n        {{> inputPartial}}\n    </div>\n{{/each}}\n\n</div>\n\n<button type=\"submit\" class=\"button\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>\n</form>\n</main>";
