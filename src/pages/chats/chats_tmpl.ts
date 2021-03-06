export const chats_tmpl: string =
`
<div class="chatlist grey">

    <div class="chatlist_header">
        <span class = "add_chat">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10.25" stroke="#999999" stroke-width="1.5"/>
            <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#999999" stroke-width="1.5"/>
            <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#999999" stroke-width="1.5"/>
            </svg>
        </span>


        <a  class="chatlist_profile_link" id="profile">
        Профиль
        <span class="chatlist_profile_link_arrow"></span>
        </a>

        <form class="chatlist_search_form" id="search-chat">
			<input type="search" name="title" class="chatlist_search_input" placeholder="Поиск">
        </form>

    </div>


</div>
<div class="chat_area_mock">
    <h1 class="chat_area_mock_text grey">Выберите чат чтобы отправить сообщение</h1>
</div>
<div class="overlay" id="overlay"></div>
`
