import {Indexed} from '../types';
import merge from '../funcs/merge';

function hash(key: string, size: number): number {
	const MAX_LENGTH = 200;

	const start = key.length > MAX_LENGTH ?
		Math.floor((key.length % MAX_LENGTH) / 2) : 0;
	const end = Math.min(key.length, MAX_LENGTH);

	let total = 0;

	for (let i = 0; i < end; i++) {
		const charCode = key.charCodeAt(start + i);
		total = (total + charCode * (i + 1)) % size;
	}

	return total;
}

class Store {
	static _instance: any
	stroreObservers: {[index: string]:any}
	memory: any[]
	size: number;
	constructor(size: number) {
		if (!size || size < 0) {
			throw new Error('Размер должен быть положительным числом');
		}
		if (Store._instance) {
			return Store._instance;
		}
		this.size = size;
		this.memory = [];
		this.stroreObservers = {};
		Store._instance = this;
	}

	set(key: string, data: Indexed): void {
		if (this.memory[hash(key, this.size)]) {
			const list = this.memory[hash(key, this.size)];
			const index = this.findMatchIndex(list, key);
			if (index !== undefined) {
				merge(list[index][1], data);
			}
			if (index === undefined) {
				list.push([key, data]);
			}
		}
		if (!this.memory[hash(key, this.size)]) {
			this.memory[hash(key, this.size)] = [[key, data]];
		}
		this._emitObserver(key);
	}

	get(key: string): Indexed | undefined {
		if (this.memory[hash(key, this.size)]) {
			const list = this.memory[hash(key, this.size)];
			const index = this.findMatchIndex(list, key);
			if (index !== undefined) return list[index][1];
		}
	}

	delete(key: string): void {
		if (this.memory[hash(key, this.size)]) {
			const list = this.memory[hash(key, this.size)];
			const index = this.findMatchIndex(list, key);
			if (index !== undefined) delete this.memory[hash(key, this.size)];
		}
	}

	setStoreObserver(name: string, callback: any): void {
		if (this.stroreObservers[name]) {
			return;
		}

		this.stroreObservers[name]= [];
		this.stroreObservers[name].push(callback);
	}

	_emitObserver(name: string): void {
		if (!this.stroreObservers[name]) {
			return;
		}

		this.stroreObservers[name].forEach(function(observer: any) {
			observer();
		});
	}

	findMatchIndex(list: Indexed, key: string): number | undefined {
		for (let i = 0; i < list.length; i++) {
			if (list[i][0] === key) return i;
		}
	}
}

export const store = new Store(100);
