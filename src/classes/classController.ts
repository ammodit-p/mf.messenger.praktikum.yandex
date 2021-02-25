import {router} from "../initialaze.js";
import {store} from "../store/Store.js";

export class Controller {
    constructor() {}

    set(path: string, data: any) {
        store.set(path, data)
        return this
    }

    go(path: string) {
        router.go(path)
    }
}