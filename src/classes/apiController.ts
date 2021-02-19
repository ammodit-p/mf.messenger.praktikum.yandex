

export class apiController {
    _apiInstance: any;
    _data: any | null;
    _api: any | null;

    constructor (api: any, data: any) {
        this._apiInstance = api,
        this._data = data,
        this._api = null

    }

    request() {
        if (!this._api) {
            this._api = new this._api(this._data)
        }
        return this._api.request()
    }
}