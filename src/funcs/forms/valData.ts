import {RegObj} from "../../types";

export const valdata: RegObj  = {
    "login": /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
    "password": /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
    "email": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    "first_name": /^[а-яА-ЯёЁa-zA-Z0-9]/,
    "second_name": /^[а-яА-ЯёЁa-zA-Z0-9]/,
    "phone": /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
}