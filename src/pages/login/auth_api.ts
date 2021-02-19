import {BaseAPI} from "../../classes/baseApi.js";
import {Fetch} from "../../classes/classFetch.js";
import {Router} from "../../classes/classRouter.js"

const authApiInstance = new Fetch('/auth/signin');

export class authApi extends BaseAPI {
    constructor(data: any) {
        super({}, data)
    }
    request(): Promise<XMLHttpRequest> {
        return authApiInstance.post('/', this._options)
    }

    result() {
        this.request()
            .then((res) => {
                if (res.status === 200) {
                    const router = new Router(".wrapper")
                    router.go("/chat")
                }
            })
            .catch((e) => console.log(e))
    }
}
