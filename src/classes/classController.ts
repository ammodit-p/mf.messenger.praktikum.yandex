import {router} from '../initialaze';
import {store} from '../store/Store';
import {Indexed} from '../types';

export class Controller {
	constructor() {}

	set(path: string, value?: string | Indexed): void {
		if (value !== undefined) {
			if (typeof(value) === 'string') {
				const data: Indexed = this._parse(value);
				store.set(path, data);
			}
			if (typeof(value) === 'object') {
				store.set(path, value);
			}
		}
	}

	_parse(value: string): Indexed {
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
}
