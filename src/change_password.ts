import {profilePassChange_data} from "/modules/data/profilePassChange_data.js"
import {profileChangeCompile} from "/modules/profileChange/profileChange.js";

const data = profilePassChange_data;

const root: any = document.querySelector("body");

const main: any = profileChangeCompile(data)

root.innerHTML = main;