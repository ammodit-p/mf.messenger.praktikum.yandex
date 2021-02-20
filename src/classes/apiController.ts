
import {Indexed} from "../types.js";
import {State} from "../store/Store.js";
import {router} from "../initialaze.js";
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

    _getApi (apiName: string) {
        return this._apis[apiName]
    }

    canIGo(apiName: string, data: any, go:string): boolean | void {
        const api = this._getApi(apiName);
        if (!api) {
            return false
        }

        this._currentApi = api
        this._currentApi.request(data)
            .then((res: any) => {
                if(res.status === 200) {
                    router.go(go)
                }
                console.log(res)
                
            })
            .catch((e: any) => {
                console.log(e)
            
            })
    }

    create(apiName: string, data: any, go: string): void {
        const api = this._getApi(apiName);
        if (!api) {
            return
        }

        this._currentApi = api
        this._currentApi.create(data)
            .then((res: any) => {
                if(res.status === 200) {
                    State.set(apiName, res.response);
                    router.go(go)
                }
                console.log(res)
                
            })
            .catch((e: any) => {
                console.log(e)
                
            })
    }

}