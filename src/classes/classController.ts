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

    delete (path: string) {
        store.delete(path)
    }

    get (path: string): any {
        store.get(path)
    }
}