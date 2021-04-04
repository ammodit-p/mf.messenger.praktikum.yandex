export type StringObj = {
	[k in string]: string | boolean
}

export type RegObj = {
	[key in string]: RegExp
}

export interface Options{
	headers?: {[k in string]: any};
	data?: any;
}
