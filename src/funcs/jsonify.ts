import escape from './escape';
import objFromForm from './objFromForm';

export default function jsonify(form: any): string {
  const obj: any = objFromForm(form);

  for (let key in obj) {
    if (key) {
      key = escape(obj[key]);
    }
  }

  const json = JSON.stringify(obj);
  return json;
}
