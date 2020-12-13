export const change_user_data_tmpl = `
{{>profileLinkPartial}}
<main class ="wrapper">
{{> profileAvatarPartial}}

<form>
<div class="profile-user-data">

{{#each inputs}}
    <div class="profile-user-item">
        {{> inputPartial}}
    </div>
{{/each}}

</div>

<div class = "for-button"></div>
</form>
</main>`;
//# sourceMappingURL=change_user_data_tmpl.js.map