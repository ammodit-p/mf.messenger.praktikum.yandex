import {Indexed} from "../types";
export function arrToObject (arr: any): Indexed {
  const result: Indexed = arr.reduceRight((acc: string|number, key:string|number) => ({ [key]: acc }))
  return result
}
