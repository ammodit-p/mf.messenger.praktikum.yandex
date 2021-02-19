import {StringObj} from "../types";
import {Options} from "../types";
export class BaseAPI {
    _options: Options
    constructor (headers: StringObj, data: any) {
        this._options = {
            headers,
            data
        }
    }
    
    create(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    request(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    update(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    delete(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }
}