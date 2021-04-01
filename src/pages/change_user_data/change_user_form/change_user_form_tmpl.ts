export const change_user_form_tmpl: string =
`
<div class="profile-user-data">

    {{#each inputs}}
        <div class="profile_user_data_item">
			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{email}} >

			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{login}} >

			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{first_name}} >

			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{second_name}} >

			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{display_name}} >

			<label for={{fieldName}} class = "{{inputClass}}">{{labelValue}}</label>
			<input id={{fieldName}} name={{fieldName}} type ={{inputType}} class="{{class}}" placeholder={{val}} >
        </div>
    {{/each}}

</div>
`
