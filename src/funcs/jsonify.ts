import escape from "./escape.js";
import objFromForm from "./objFromForm.js"

export default function jsonify (form: any) {
    const obj: any = objFromForm(form)

    for (let key in obj) {
        key = escape(obj[key])
    }

    const json = JSON.stringify(obj)
    return json
}