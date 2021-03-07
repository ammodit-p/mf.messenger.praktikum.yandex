import {router} from '../initialaze';
import {store} from '../store/Store';

export class Controller {
	constructor() {}

	set(path: string, value?: string): void {
		if (value !== undefined) {
			const data =JSON.parse(value);
			store.set(path, data);
		}
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
