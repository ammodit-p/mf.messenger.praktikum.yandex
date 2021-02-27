import {Indexed} from "../types";
import {Options} from "../types";
import {queryString} from './../funcs/queryString'




enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
    };
class Fetch {
    url: string
    constructor () {
        this.url = 'https://ya-praktikum.tech/api/v2'
    }
    get(url: string, options:Options = {"headers": {}}): Promise<XMLHttpRequest> {
        const {data} = options
        if(data) {
            url = this.url + url + queryString(data)
        }
    return this.request(url, options, METHODS.GET);
    };

    put = (url: string, options:Options = {"headers": {}}): Promise<XMLHttpRequest> => {
        url = this.url + url
        return this.request(url, options, METHODS.PUT);
      }

    post = (url: string, options:Options = {"headers": {}}): Promise<XMLHttpRequest> => {
        url = this.url + url
    return this.request(url, options, METHODS.POST);
    }

    delete = (url: string, options:Options = {"headers": {}}): Promise<XMLHttpRequest> => {
        url = this.url + url
    return this.request(url, options, METHODS.DELETE);
    }




    request(url: string, options: Options, method: string): Promise<XMLHttpRequest> {
    const {headers, data} = options;

        return new Promise((resolve,reject) => {
                        
            function setHeaders (headers: Indexed) {
                for (let key in headers) {
                    xhr.setRequestHeader(key, headers[key])
                }
            }
            
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.withCredentials = true;
            
            
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

export default Fetch
