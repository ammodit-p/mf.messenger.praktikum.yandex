export const profileChange_tmpl = `
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

<button type="submit" class="button">Сохранить</button>
</form>
</main>`;
//# sourceMappingURL=profileChange_tmpl.js.map