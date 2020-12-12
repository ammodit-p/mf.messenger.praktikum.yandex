export const profile_tmpl: string = 
`
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
</main>`