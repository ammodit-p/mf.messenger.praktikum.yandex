import {profilePage_data} from "/modules/data/profilePage_data.js"
import {profileCompile} from "/modules/profile/profile.js";

const data = profilePage_data;

const root: any = document.querySelector("body");

const main: any = profileCompile(data)

root.innerHTML = main;