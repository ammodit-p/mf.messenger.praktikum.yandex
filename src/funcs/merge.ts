import {Indexed} from '../types';

export function merge(target: any, source: any): Indexed {
  if (!isPlainObject(target) && isPlainObject(source)) {
    return source;
  }

  if (!isPlainObject(source) && isPlainObject(target)) {
    return target;
  }

  for (const key in source) {
    if (isPlainObject(source[key])) {
      if (!target[key]) Object.assign(target, {[key]: {}});
      merge(target[key], source[key]);
    } else {
      Object.assign(target, {[key]: source[key]});
    }
  }
  return target;
}

function isPlainObject(value: unknown): value is Indexed {
  return typeof value === 'object' &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]';
}
