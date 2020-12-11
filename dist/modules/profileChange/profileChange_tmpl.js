export const profileChange_tmpl = `
{{>profileLinkPartial}}
<main class ="wrapper">
{{> profileAvatarPartial}}

<div class="profile-user-data">

{{#each inputs}}
    <div class="profile-user-item">
        {{> inputPartial}}
    </div>
{{/each}}

</div>

<div class="profile-menu">
<ul class="profile-list">
    <div class="profile-user-item"><a href="./change_user_data.html">Изменить данные</a></div>
    <div class="profile-user-item"><a href="./change_password.html">Изменить пароль</a></div>
    <div class="profile-user-item"><a href="index.html" class="red-link">Выйти</a></div>
</ul>
</div>
</main>`;
//# sourceMappingURL=profileChange_tmpl.js.map