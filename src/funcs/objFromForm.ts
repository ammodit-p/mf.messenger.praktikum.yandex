
function objFromForm(elements: FormData): {[k in string]: any} {
	const obj: {[index: string]:any} = {};
	for (const pair of elements.entries()) {
		obj[pair[0]] = pair[1];
	}
	return obj;
}

export default objFromForm;
