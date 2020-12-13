export const signin_tmpl = `<form>
<div class = "upper-section">
    <h1 class="auth-header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<div class = "bottom-section">
    <div class = "for-button"></div>
    <a href='signin.html'  >Нет аккаунта?</a>
</div>
 </form>`;
//# sourceMappingURL=signin_tmpl.js.map