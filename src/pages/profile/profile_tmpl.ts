export const profile_tmpl: string = 
`<a href={{link}} class="profile-return-button">
<span class="profile-return-button-circle"></span>
</a>

<div class="profile-avatar-name">
<button class="profile-avatar-button">
<span></span>
</button>
<h1 class="login-header">{{name}}</h1>
</div>

<div class="profile-user-data">

{{#each user-item}}
    {{> profileDataPartial}}
{{/each}}

</div>

<div class="profile-menu">
 {{# each menu}}
 {{> profileMenuPartial}}
 {{/each}}
</div>`