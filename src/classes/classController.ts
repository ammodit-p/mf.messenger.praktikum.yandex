import {router} from '../index';
import {store} from '../store/Store';

export class Controller {
	set(path: string, value?: string | {[k in string]: any}): void {
		if (value !== undefined) {
			if (typeof(value) === 'string') {
				const data: {[k in string]: any} = this._parse(value);
				store.set(path, data);
			}
			if (typeof(value) === 'object') {
				store.set(path, value);
			}
		}
	}

	formDataToObj(formData: FormData): {[k in string]: any} {
		const obj: {[k in string]: any} = {};
		for (const pair of formData.entries()) {
			obj[pair[0]] = pair[1];
		}
		return obj;
	}

	_parse(value: string): {[k in string]: any} {
		const data = JSON.parse(value);
		return data;
	}

	go(path: string): void {
		router.go(path);
	}

	delete(path: string): void {
		store.delete(path);
	}

	get(path: string): any {
		return store.get(path);
	}

	handle(res: XMLHttpRequest): void {
		switch (res.status) {
		case 401:
			this.go('/');
			break;

		case 400:
			alert('Что-то пошло не так');
			console.log(res.response);
			break;

		case 500:
			this.go('/500');
			break;
		}
	}
}
