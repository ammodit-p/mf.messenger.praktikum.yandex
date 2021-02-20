export const change_user_data_tmpl: string = 
`
<a href={{link}} class="profile-return-button">
<span class="profile-return-button-circle"></span>
</a>

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

<div class = "for-button">
    {{>buttonPartial}}
</div>
</form>
</main>`