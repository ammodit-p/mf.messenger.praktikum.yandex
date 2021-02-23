export const login_tmpl: string = 
`
<div class = "login_section">
    <h1 class="auth_header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<a class ="login_link blue_link" id="signin">Нет аккаунта?</a>
`