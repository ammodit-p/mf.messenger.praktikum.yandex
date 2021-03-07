import {router} from '../initialaze';
import {store} from '../store/Store';
import {Indexed} from '../types';

export class Controller {
	constructor() {}

	set(path: string, value?: string): void {
		if (value !== undefined) {
			const data: Indexed = this._parse(value);
			store.set(path, data);
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
		store.get(path);
	}
}
