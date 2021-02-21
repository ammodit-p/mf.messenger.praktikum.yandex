export const profile_tmpl: string = 
`<button class="profile-return-button">
<span class="profile-return-button-circle"></span>
</button>

<div class="profile-avatar-name">
<button class="profile-avatar-button">
<span></span>
</button>
<h1 class="login-header">{{name}}</h1>
</div>

<div class="profile-user-data">

{{#each user-item}}
    {{> profile_fields_partial}}
{{/each}}

</div>

<div class="profile-menu">
 {{# each menu}}
 {{> profile_menu_partial}}
 {{/each}}
</div>`