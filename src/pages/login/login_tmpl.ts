export const login_tmpl: string = 
`
<div class = "upper-section">
    <h1 class="auth-header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<div class = "bottom-section">
    <div class = "for-button">
        
    </div>
    <a class = "signin"  >Нет аккаунта?</a>
</div>
`