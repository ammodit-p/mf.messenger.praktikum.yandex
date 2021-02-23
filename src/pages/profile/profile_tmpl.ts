export const profile_tmpl: string = 
`<button class="profile_return_button" id="chats">
<span class="profile_return_button_circle"></span>
</button>

<div class="profile_header">
<button class="profile_header_button">
<img src={{src}} class="profile_header_img"></img>
</button>
<h1 class="profile_header_login">{{name}}</h1>
</div>

<div class="profile_user_data">

{{#each user-item}}
    {{> profile_fields_partial}}
{{/each}}

</div>

<div class="profile_menu">
 {{# each menu}}
 {{> profile_menu_partial}}
 {{/each}}
</div>`