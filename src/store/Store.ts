import {Indexed} from "../types";
import {arrToObject} from "../funcs/arrToObject.js";
import {merge} from "../funcs/merge.js";

class Store { 
    static _instance: any
    _props: Indexed;
    constructor () {
        if(Store._instance) {
            return Store._instance
        }
        this._props = {}
        Store._instance = this
    }

    set(path: string, value: any): void {
        const pathArr: Array<string|number> = path.split('.');
        pathArr.push(value)
        let pathObj: Indexed = arrToObject(pathArr)
        this._props = merge (this._props, pathObj)
    }
}

export const State = new Store()