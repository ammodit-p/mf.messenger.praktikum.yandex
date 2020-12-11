export const form_tmpl = `<form>
<div class = "upper-section">
    <h1 class="auth-header">{{header}}</h1>
    {{#each inputs}}
        {{> inputPartial}}
    {{/each}}
</div>
<div>
    <button type="submit" class="button">Авторизоваться</button>
    <a href='signin.html'  >Нет аккаунта?</a>
</div>
 </form>`;
//# sourceMappingURL=form_tmpl.js.map