import {Block} from '../classes/classBlock';

export function render(query: string = '.app', block: Block): void {
	const root: any = document.querySelector(query);
	root.appendChild(block.getContent());
	return root;
}

