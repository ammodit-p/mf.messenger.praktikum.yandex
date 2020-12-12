export const chatListAreaPartial_tmpl: string = 
`<aside class= "chatlist-list">
  <ul class="chatlist">

    {{#each list}}
      {{>chatListItemPartial}}
    {{/each}}

    
  </ul>
</aside>`