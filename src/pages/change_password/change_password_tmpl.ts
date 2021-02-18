export const change_password_tmpl: string = 
`
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

<div class = "for-button">
    {{>buttonPartial}}
</div>
</form>
</main>`