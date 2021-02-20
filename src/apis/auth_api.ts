
import {Fetch} from "../classes/classFetch.js";

const authApiInstance = new Fetch('/auth');

export class authApi {
    constructor() {
    }
    request(data: any) {
        const body: string = JSON.stringify(data)
        authApiInstance.post('/signin', {"data": body, "headers": {"content-type": "application/json"}})
            .then((res:any)=> {
                res = new Response
                return res
            }).catch((e) => {console.log(e)})
    }

    create(data: any) {
        const body: string = JSON.stringify(data)
        return authApiInstance.post('/signup', {"data": body, "headers": {"content-type": "application/json"}})

    }


}
