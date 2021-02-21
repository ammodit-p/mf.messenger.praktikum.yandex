export const change_password_tmpl: string = 
`
<button class="profile-return-button">
<span 
<main class ="wrapper">
<div class="profile-avatar-name">
<button class="profile-avatar-button">
<span></span>
</button>
<h1 class="login-header">{{name}}</h1>
</div>

<form>
<div class="profile-user-data">

{{#each inputs}}
    <div class="profile-user-item">
        {{> inputPartial}}
    </div>
{{/each}}

</div>


</form>
</main>`