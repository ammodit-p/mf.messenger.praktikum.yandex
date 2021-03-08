export const chatListAreaPartial_tmpl: string =
`
  <ul class="chatlist_lists">

    {{#each list}}
    <li class="chatlist_list_item {{chosen}}" id = "{{id}}">
    <div class="chatlist_list_item_icon">
      <span>
        <img src={{avatar}}>
      </span>
    </div>
    <div class="chatlist_list_item_info">
        <h2 class="chatlist_list_item_info_name black">
          {{title}}
        </h2>
        <span class="chatlist_list_item_info_preview grey">
          {{chatMessage}}
        </span>
      <time class="chatlist_list_item_info_time">{{time}}</time>
      <mark class="chatlist_list_item_info_mark blue">{{unread}}</mark>
		</div>
		<div class='chatlist_list_item_handler'></div>
  </li>
    {{/each}}


  </ul>
`
