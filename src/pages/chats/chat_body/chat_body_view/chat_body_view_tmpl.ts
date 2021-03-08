export const chat_body_view_tmpl: string =
`
<div class="chat_body_messages_item">
<div class="chat_body_messages_item_date">
	<time>19 июня</time>
</div>
</div>

<div class="chat_body_messages_item">
<div class="chat_body_messages_item_message left_message {{message_type}} {{position}}">
	<span class="chat_body_messages_item_message_content">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.


		Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
	</span>
	<span class="chat_body_messages_item_message_info">
		<time class="chat_body_messages_item_message_time">11:56</time>
	</span>
</div>
</div>

<div class="chat_body_messages_item">
<div class="chat_body_messages_item_message right_message message_img {{message_type}} {{position}}">
	<span class="chat_body_messages_item_message_content">
		<img src='../assets/photo.png'>
	</span>
	<span class="chat_body_messages_item_message_info">
		<time class="chat_body_messages_item_message_time">11:56</time>
	</span>
</div>
</div>
`
