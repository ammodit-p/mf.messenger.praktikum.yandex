export const profile_tmpl = `
{{>profileLinkPartial}}
<main class ="wrapper">
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
</div>
</main>`;
//# sourceMappingURL=profile_tmpl.js.map