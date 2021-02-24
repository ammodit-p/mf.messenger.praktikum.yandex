import {Indexed} from "../types";
import {merge} from "../funcs/merge.js";

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

    set(name: string, data: Indexed): void {
        if(!this._props[name]) {
            const value = this.get(name)
            this._props = merge (value, data)
            this._emitObserver(name)
        }
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