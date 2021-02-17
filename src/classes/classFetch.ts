import {StringObj} from "../types";
import {Options} from "../types";
import {queryString} from './../funcs/queryString'

export class Fetch {
    get(url: string, options:Options = {"data": "", "headers": {}}): Promise<XMLHttpRequest> {
        const {data} = options
        url = url + queryString(data)
    return this.request(url, options, 'GET');
    };

    put = (url: string, options:Options = {"data": "", "headers": {}}) => {
        return this.request(url, options, "PUT").catch((e)=> {console.log(e)});
      }

    post = (url: string, options:Options = {"data": "", "headers": {}}) => {
    return this.request(url, options, "POST").catch((e)=> {console.log(e)});
    }

    delete = (url: string, options:Options = {"data": "", "headers": {}}) => {
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