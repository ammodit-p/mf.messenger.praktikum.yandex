export const popup_upload_tmpl: string =
`
<div class="popup_upload {{form_class}}">
<h1 class="popup_form_header {{form_header_class}}">{{content}}</h1>

	<label class="popup_upload_label">
		Выбрать файл на компьютере
		<input type="file" name="avatar">
	</label>
	<span class="file_upload">Файл загружен</span>

</div>
`
