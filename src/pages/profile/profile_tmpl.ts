export const profile_tmpl: string = 
`<button class="profile_return_button" id="chats">
    <span class="profile_return_button_circle"></span>
</button>

<div class="profile_header">
    <button class="profile_header_button">
         <img src={{avatar}} class="profile_header_img"></img>
    </button>
    <h1 class="profile_header_login">{{first_name}}</h1>
</div>

<div class="profile_user_data">

    <div class="profile_user_data_item">
        Почта
        <span class = "profile_user_data_item_text">{{email}}</span>
    </div>

    <div class="profile_user_data_item">
        Логин
        <span class = "profile_user_data_item_text">{{login}}</span>
    </div>

    <div class="profile_user_data_item">
        Имя
        <span class = "profile_user_data_item_text">{{first_name}}</span>
    </div>

    <div class="profile_user_data_item">
        Фамилия
        <span class = "profile_user_data_item_text">{{second_name}}</span>
    </div>

    <div class="profile_user_data_item">
        Имя в чате
        <span class = "profile_user_data_item_text">{{display_name}}</span>
    </div>

    <div class="profile_user_data_item">
        Телефон
        <span class = "profile_user_data_item_text">{{phone}}</span>
    </div>

</div>

<div class="profile_menu">
    <div class="profile_menu_item}"><span class="blue_link user-data">Изменить данные</span></div>
    <div class="profile_menu_item"><span class="blue_link user-pass">Изменить пароль</span></div>
    <div class="profile_menu_item"><span class="red_link">Выйти</span></div>
</div>`