export const signin_tmpl: string = 
`<form>
<div class = "upper-section">
    <h1 class="auth-header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<div class = "bottom-section">
    <div class = "for-button">
        {{>buttonPartial}}
    </div>
    <a class = "auth"'  >Нет аккаунта?</a>
</div>
 </form>`