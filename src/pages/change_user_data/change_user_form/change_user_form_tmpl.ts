export const change_user_form_tmpl: string =
`
<div class="profile-user-data">
		<div class="profile_user_data_item">
			<label for="email" class = "input_label black_label">Почта</label>
			<input id="email" name="email" type ="email" class="profile_input" value="{{email}}" >
		</div>

		<div class="profile_user_data_item">

			<label for="login" class = "input_label black_label">Логин</label>
			<input id="login" name="login" type ="text" class="profile_input" value="{{login}}" >

		</div>
		<div class="profile_user_data_item">

			<label for="first_name" class = "input_label black_label">Имя</label>
			<input id="first_name" name="first_name" type ="text" class="profile_input" value="{{first_name}}" >
		</div>
		<div class="profile_user_data_item">
			<label for="second_name" class = "input_label black_label">Фамилия</label>
			<input id="second_name" name="second_name" type ="text" class="profile_input" value="{{second_name}}" >
		</div>
		<div class="profile_user_data_item">
			<label for="display_name" class = "input_label black_label">Имя в чате</label>
			<input id="display_name" name="display_name" type ="text" class="profile_input" value="{{display_name}}" >
		</div>
		<div class="profile_user_data_item">
			<label for="phone" class = "input_label black_label">Телефон</label>
			<input id="phone" name="phone" type ="Телефон" class="profile_input" value="{{phone}}" >
		</div>

</div>
`
