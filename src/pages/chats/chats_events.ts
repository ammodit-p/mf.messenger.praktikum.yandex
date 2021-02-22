import {router} from "../../initialaze.js"

export const events = {
    click: function (event:any) {
        if (event.target === document.querySelector(".chatlist-profile-link")) {
            event.preventDefault()
            router.go('/profile')
        }
    }
}