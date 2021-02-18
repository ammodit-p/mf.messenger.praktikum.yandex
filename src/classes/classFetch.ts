import {StringObj} from "../types.js";
import {Options} from "../types.js";
import {queryString} from './../funcs/queryString.js'

export class Fetch {
    url: string
    constructor (url: string) {
        this.url = 'https://www.ya-praktikum.tech/api/v2' + url
    }
    get(url: string, options:Options = {"headers": {}}): Promise<void | XMLHttpRequest> {
        const {data} = options
        url = this.url + url + queryString(data)
    return this.request(url, options, 'GET').catch((e)=> {console.log(e)});
    };

    put = (url: string, options:Options = {"headers": {}}): Promise<void | XMLHttpRequest> => {
        url = this.url + url
        return this.request(url, options, "PUT").catch((e)=> {console.log(e)});
      }

    post = (url: string, options:Options = {"headers": {}}): Promise<void | XMLHttpRequest> => {
        url = this.url + url
    return this.request(url, options, "POST").catch((e)=> {console.log(e)});
    }

    delete = (url: string, options:Options = {"headers": {}}): Promise<void | XMLHttpRequest> => {
        url = this.url + url
    return this.request(url, options, "DELETE").catch((e)=> {console.log(e)});
    }




    request(url: string, options: Options, method: string): Promise<XMLHttpRequest> {
    const {headers, data} = options;

        return new Promise((resolve,reject) => {
                        
            function setHeaders (headers: StringObj) {
                for (let key in headers) {
                    xhr.setRequestHeader(key, headers[key])
                }
            }
            
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            setHeaders(headers);
            xhr.onload = function() {
            resolve(xhr);
            };
            
            xhr.onabort = reject;
            xhr.onerror = reject;
            
            if (method === "GET" || !data) {
            xhr.send();
            } else {
            xhr.send(data);
            }
        })
    };
}