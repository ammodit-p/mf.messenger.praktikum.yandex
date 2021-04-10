import {router} from '../../index'

export const events = {
    click: function (event: any) {
        if(event.target === document.querySelector('a')) {
            event.preventDefault()
            router.back()
        }
    }
}
