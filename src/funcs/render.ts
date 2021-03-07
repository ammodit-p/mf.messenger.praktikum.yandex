import Block from '../classes/classBlock';

function render(query: string = '.app', block: Block): void {
	const root: any = document.querySelector(query);
	root.appendChild(block.getContent());
	return root;
}

export default render;
