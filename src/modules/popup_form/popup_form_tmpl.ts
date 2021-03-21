export const popup_form_tmpl: string =
`
<form class="popup_form {{form_class}}" id="{{id}}">
<h1 class="popup_form_header {{form_header_class}}">{{content}}</h1>

{{>inputPartial}}

</form>
`
