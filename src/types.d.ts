    export type Indexed <T = unknown> = {
        [k in string]: T
    }

    export type StringObj = {
        [k in string]: string
    }

    export type RegObj = {
        [key in string]: RegExp
    }

    export interface Options{
        headers: StringObj;
        data?: any;
    }
