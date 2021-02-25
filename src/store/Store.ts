import {Indexed} from "../types";
import {merge} from "../funcs/merge.js";
import {arrToObject} from "../funcs/arrToObject.js"

class Store { 
    static _instance: any
    stroreObservers: {[index: string]:any}
    _props: Indexed
    constructor () {
        if(Store._instance) {
            return Store._instance
        }
        this._props = {}
        this.stroreObservers = {}
        Store._instance = this
    }

    get (name: string): Indexed | undefined {
        const keys = name.split('.'); 

        let result: any = this._props; 
        for (let key of keys) {
            const value = result[key]; 

            if (!value) {
            return undefined;       
            }

            result = value; 
        }

        return result;
    }

    set(path: string, data: any): void {
        if (typeof path !== 'string') {
            throw new Error ('path must be string')
          }
          
          const pathArr: Array<string|number> = path.split('.');
          pathArr.push(data)
          let pathObj: Indexed = arrToObject(pathArr)
          this._props = merge (this._props, pathObj)
    }

    delete(path: string) {
        const keys = path.split('.'); 

        let result: any = this._props; 
        for (let key of keys) {
            const value = result[key]; 

            if (!value) {
            delete result[key];       
            return
            }

            result = value; 
        }

        return;
    }

    setStoreObserver (name: string, callback: any) {
        if (this.stroreObservers[name]) {
            return
          }
      
          this.stroreObservers[name]= []
          this.stroreObservers[name].push(callback)
    }

    _emitObserver(name: string) {
        if (!this.stroreObservers[name]) {
            throw new Error(`Нет события: ${name}`);
          }
          
          this.stroreObservers[name].forEach(function(observer: any) {
            observer();
          });
    }
}

export const store = new Store()