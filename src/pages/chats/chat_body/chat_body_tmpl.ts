export const chat_body_tmpl: string =
`<div class = "chat_body_container">
    <header class="chat_body_header">
			<img src="{{avatar}}" class="chat_body_header_avatar">
			<h1 class="chat_body_header_login">{{title}}</h1>

			<div  class="chat_body_header_menu">
				<svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
					<circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
					<circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
				</svg>

				<div class="chat_body_header_menu_show">
						<ul>
										<li class="chat_body_header_menu_item">
												<span class="chat_body_header_menu_item_icon"></span>
												<div class="chat_body_header_menu_item_text">
														<button>
																Удалить чат
														</button>
												</div>
										</li>
						</ul>
				</div>
			</div>
    </header>

	<div class="chat_body_messages">

	</div>

	<div class="chat_body_footer">
		<form   class="chat_body_footer_form" >
		<div  class="chat_body_footer_menu">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.014L17.2768 8.43781L18.2196 9.38062L10.6435 16.9568L9.70067 16.014Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8706L25.1335 16.2945L26.0763 17.2373L18.5002 24.8134L17.5574 23.8706Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#3369F3"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#3369F3"/>
			</svg>

			<div class="chat_body_footer_menu_show">
				<div class="chat_body_footer_menu_container">
					<div class="chat_body_footer_menu_item">
						<div class="chat_body_footer_menu_item_icon">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
							</svg>
						</div>

							<label class="chat_body_footer_menu_item_text">
								Фото
								<input type="file" name="photo_video">
							</label>
					</div>
				</div>

			</div>
		</div>

			<input placeholder="Сообщение" type="text" name="message" class="chat_body_footer_form_message">

			<button type="submit" name="submit" class="chat_body_footer_form_submit">
				<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="5.19995" width="11" height="1.6" fill="white"/>
					<path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
				</svg>

			</button>

		</form>
	</div>
</div>
`
