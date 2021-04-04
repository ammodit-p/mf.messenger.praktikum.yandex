
export default function isPlainObject(value: unknown): value is {[k in string]: any} {
	return typeof value === 'object' &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]';
}
