
import profile_controller from "./profile_controller.js";
    
export const events = {
    click: function (event: any) {
        if(event.target === document.querySelector('#chats')) {
            event.preventDefault()
            profile_controller.go('/chat')
        }
        if(event.target === document.querySelector('.user-data')) {
            event.preventDefault()
            profile_controller.go('/change-user-data')
        }
        if(event.target === document.querySelector('.user-pass')) {
            event.preventDefault()
            profile_controller.go('/change-password')
        }

        if(event.target === document.querySelector('.logout')) {
            event.preventDefault()
            profile_controller.post()
        }
    }
}

