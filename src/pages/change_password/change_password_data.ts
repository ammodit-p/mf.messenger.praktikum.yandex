export const change_password_data: {} = {
    "name": "Имя",
    "link": "",
    "src": "./assets/avatar.png",
     "text": "Сохранить",
    "inputs": [
        {
            "fieldName": "oldPassword",
            "inputType": "password",
            "class": "profile_input",
            "inputClass": "input_label black_label",
			"labelValue": "Старый пароль",
			"val": "old password"
        },
        {
            "fieldName": "newPassword",
            "inputType": "password",
            "class": "profile_input",
            "inputClass": "input_label black_label",
			"labelValue": "Новый пароль",
			"val": "new password"
        },
        {
            "fieldName": "checkNewPassword",
            "inputType": "password",
            "inputClass": "input_label black_label",
            "class": "profile_input",
			"labelValue": "Повторите новый пароль",
			"val": "confirm password"
        },
    ]
}
