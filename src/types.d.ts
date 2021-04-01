    export type Indexed  = {
        [k in string]: any
    }

    export type StringObj = {
        [k in string]: string | boolean
    }

    export type RegObj = {
        [key in string]: RegExp
    }

    export interface Options{
        headers?: Indexed;
        data?: any;
    }

    export type S = {
        [k in string]: string
      }
