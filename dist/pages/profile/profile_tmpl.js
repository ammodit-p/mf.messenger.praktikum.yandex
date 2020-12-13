export const profile_tmpl = `{{>profileLinkPartial}}
{{> profileAvatarPartial}}

<div class="profile-user-data">

{{#each user-item}}
    {{> profileDataPartial}}
{{/each}}

</div>

<div class="profile-menu">
 {{# each menu}}
 {{> profileMenuPartial}}
 {{/each}}
</div>`;
//# sourceMappingURL=profile_tmpl.js.map