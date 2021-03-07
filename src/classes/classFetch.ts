import {Indexed} from '../types';
import {Options} from '../types';
import {queryString} from './../funcs/queryString';


enum METHODS {
		GET = 'GET',
		PUT = 'PUT',
		POST = 'POST',
		DELETE = 'DELETE'
	}
class Fetch {
	_url: string
	constructor() {
		this._url = 'https://ya-praktikum.tech/api/v2';
		this.put = this.put.bind(this);
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.delete = this.delete.bind(this);
		this.request = this.request.bind(this);
	}

	put(url: string, options:Options = {'headers': {}}): Promise<XMLHttpRequest> {
		const newUrl = this._url + url;
		return this.request(newUrl, options, METHODS.PUT);
	}

	get(url: string, options:Options = {'headers': {}}): Promise<XMLHttpRequest> {
		const {data} = options;
		url = this._url + url;
		if (data) {
			url = url + queryString(data);
		}
		return this.request(url, options, METHODS.GET);
	}

	post(url: string, options:Options = {'headers': {}}): Promise<XMLHttpRequest> {
		url = this._url + url;
		return this.request(url, options, METHODS.POST);
	}

	delete(url: string, options:Options = {'headers': {}}): Promise<XMLHttpRequest> {
		url = this._url + url;
		return this.request(url, options, METHODS.DELETE);
	}


	request(url: string, options: Options, method: string): Promise<XMLHttpRequest> {
		const {headers, data} = options;

		return new Promise((resolve, reject) => {
			function setHeaders(headers: Indexed) {
				for (const key in headers) {
					if (key) {
						xhr.setRequestHeader(key, headers[key]);
					}
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

			if (method === 'GET' || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	}
}

export default Fetch;
