import {Indexed} from "../types";
export function isPlainObject(value: unknown): value is Indexed {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}
