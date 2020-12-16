export const chatHeaderPartial_tmpl = `<header class="chat-header">
<img src="./img/avatar.png" class="chat-avatar-img">
<h1 class="login-header">Чатик</h1>

<div  class="chat-menu">
  <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
<circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
<circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
</svg>

  <div class="show-menu">
    <ul>
    {{# each menu}}
    <li class="chat-menu-item">
    <div class="chat-menu-item-icon {{svg}}">
    </div>
    <div class="chat-menu-item-text">
      <button>
        {{text}}
      </button>
    </div>
    </li>
    {{/each}}

     
    </ul>
  </div>
</div>
</header>`;
//# sourceMappingURL=chatHeaderPartial_tmpl.js.map