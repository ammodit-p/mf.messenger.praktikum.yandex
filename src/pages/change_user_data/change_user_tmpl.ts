export const change_user_tmpl: string =
`<div>
    <button class="profile_return_button" id="profile">
		<img class="profile_return_button_circle" src="./assets/profile_btn.svg"></img>
    </button>
    <div class="profile_header">
		<img class="profile_header_button" src='https://ya-praktikum.tech/api/v2/resources/{{avatar}}'">
		</img>
        <h1 class="profile_header_login">{{name}}</h1>
    </div>
</div>`
