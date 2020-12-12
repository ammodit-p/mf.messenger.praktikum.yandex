export const chatListItemPartial_tmpl = `<li class="chatlist-item {{chosen}}">
    <div class="chatlist-item-icon">
      <span>
        <img src={{imgSrc}}>
      </span>
    </div>
    <div class="chatlist-item-info">
        <h2 class="chatlist-info-name">
          {{chatName}}
        </h2>
        <span class="chatlist-info-preview">
          {{chatMessage}}
        </span>
      <time class="chatlist-info-time">{{time}}</time>
      <mark class={{isUnread}}>{{unread}}</mark>
    </div>
  </li>`;
//# sourceMappingURL=chatListItemPartial_tmpl.js.map