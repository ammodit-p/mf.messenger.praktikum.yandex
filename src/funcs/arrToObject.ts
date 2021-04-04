export function arrToObject(arr: any): {[k in string]: any} {
	const result: {[k in string]: any} = arr.reduceRight(
		(acc: string|number, key:string|number) => ({
			[key]: acc,
		}));
	return result;
}
