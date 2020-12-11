import {profileDataChange_data} from "/modules/data/profileDataChange_data.js"
import {profileChangeCompile} from "/modules/profileChange/profileChange.js";

const data = profileDataChange_data;

const root: any = document.querySelector("body");

const main: any = profileChangeCompile(data)

root.innerHTML = main;