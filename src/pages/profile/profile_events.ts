
import {router} from "../../initialaze.js";
    
export const events = {
    click: function (event: any) {
        if(event.target === document.querySelector('#chats')) {
            event.preventDefault()
            router.go('/chat')
        }
        if(event.target === document.querySelector('.user-data')) {
            event.preventDefault()
            router.go('/change-user-data')
        }
        if(event.target === document.querySelector('.user-pass')) {
            event.preventDefault()
            router.go('/change-password')
        }
    }
}

