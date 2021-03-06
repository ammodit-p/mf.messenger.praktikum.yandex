import {Indexed} from '../types';
function objFromForm(elements: FormData): Indexed {
  const obj: {[index: string]:any} = {};
  for (const pair of elements.entries()) {
    obj[pair[0]] = pair[1];
  }
  return obj;
}

export default objFromForm;
