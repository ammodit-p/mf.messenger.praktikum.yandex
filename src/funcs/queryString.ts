import {Indexed} from "../types";
import isPlainObject from "./isPlainObj"


function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | Indexed {
    return isPlainObject(value) || isArray(value);
}

function getKey(key: string, parentKey?: string) {
    return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: Indexed | [], parentKey?: string) {
    const result: [string, string][] = [];

    for(const [key, value] of Object.entries(data)) { //я не знаю почему он тут ругается на entries. Собиорается вроде без этой ошибки. target стоит правильный. но не помогает
        if (isArrayOrObject(value)) {
            result.push(...getParams(value, getKey(key, parentKey)));
        } else {
            result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
        }
    }

    return result;
}

export function queryString(data: any) {
    if (!isPlainObject(data)) {
        throw new Error('input must be an object');
    }

    return getParams(data).map(arr => arr.join('=')).join('&');
} 
