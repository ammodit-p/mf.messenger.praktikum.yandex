
import {Fetch} from "../classes/classFetch.js";

const authApiInstance = new Fetch('/auth');

export class authApi {
    constructor() {
    }
    request(data: any) {
        const body: string = JSON.stringify(data)
        return authApiInstance.post('/signin', {"data": body, "headers": {"content-type": "application/json"}})

    }

    create(data: any) {
        const body: string = JSON.stringify(data)
        return authApiInstance.post('/signup', {"data": body, "headers": {"content-type": "application/json"}})

    }


}
