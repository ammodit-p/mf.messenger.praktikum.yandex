import {isEqual} from '../funcs/isEqual';
import render from '../funcs/render';
import {Indexed} from '../types';

export class Route {
	_pathname: string;
	_blockClass: any;
	_block: any | null;
	_props: any;

	constructor(pathname: string, view: any, props: Indexed) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname: string): void {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave(): void {
		if (this._block) {
			this._block.delete();
		}
	}

	match(pathname: string): boolean {
		return isEqual(pathname, this._pathname);
	}

	render(): void {
		if (!this._block) {
			this._block = new this._blockClass();
			render(this._props.rootQuery, this._block);
		}
		render(this._props.rootQuery, this._block);
	}
}
