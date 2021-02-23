export const change_pass_form_tmpl: string = 
`
<div class="profile_user_data">
    {{#each inputs}}
        <div class="profile_user_data_item">
            {{> inputPartial}}
        </div>
    {{/each}}
</div>
`