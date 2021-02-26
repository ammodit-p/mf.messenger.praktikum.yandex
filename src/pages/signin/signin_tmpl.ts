export const signin_tmpl: string = 
`
<div class = "signin_section">
    <h1 class="signin_header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<a class ="signin_link blue_link" id="auth" >Войти</a>
`
