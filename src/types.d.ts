    export type Indexed <T = unknown> = {
        [k in string]: T
    }

    export type StringObj = {
        [k in string]: string
    }

    export interface Options{
        headers: StringObj;
        data?: any;
    }
