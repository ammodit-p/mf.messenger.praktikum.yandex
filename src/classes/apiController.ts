
import {Indexed} from "../types.js"
export class apiController {
    static __instance: any;
    _apis: Indexed;
    _currentApi: any | null
    constructor () {
        if (apiController.__instance) {
            return apiController.__instance;
        }
        this._apis = {}
        this._currentApi = null

        apiController.__instance;
    }

    use (apiName:string, api:any) {
        const apiInstance = new api()
        this._apis[apiName] = apiInstance
        return this
    }

    getApi (apiName: string) {
        return this._apis[apiName]
    }

    canIGo(apiName: string, data: any): boolean | void {
        const api = this.getApi(apiName);
        if (!api) {
            return false
        }

        this._currentApi = api
        this._currentApi.request(data)
            .then((res: any) => {
                if(res.status === 200) {
                    return true
                }
                console.log(res)
                return false
            })
            .catch((e: any) => {
                console.log(e)
                return false
            })
    }

}