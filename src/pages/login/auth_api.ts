
import {Fetch} from "../../classes/classFetch.js";

const authApiInstance = new Fetch('/auth/signin');

export class authApi {
    constructor() {
    }
    request(data: any): Promise<XMLHttpRequest> {
        const body: string = JSON.stringify(data)
        return authApiInstance.post('/', {"data": body, "headers": {"content-type": "application/json"}})
    }
}
