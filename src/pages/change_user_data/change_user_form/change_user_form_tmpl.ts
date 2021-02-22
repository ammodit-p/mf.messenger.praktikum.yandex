export const change_user_form_tmpl: string = 
`
<div class="profile-user-data">

    {{#each inputs}}
        <div class="profile-user-item">
            {{> inputPartial}}
        </div>
    {{/each}}

</div>
`