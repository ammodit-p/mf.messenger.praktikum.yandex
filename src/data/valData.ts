export const valdata: {} = {
    "tel": new RegExp("/^\\+?(\\d{1,3})?[- .]?\\(?(?:\\d{2,3})\\)?[- .]?\\d\\d\\d[- .]?\\d\\d\\d\\d/$/"),
    "email": new RegExp("/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i"),
    "login": new RegExp('[\p{L}\p{N}\p{P}\p{S}\p{Z}]'),
    "password": new RegExp('[\p{L}\p{N}\p{P}\p{S}\p{Z}]')
}