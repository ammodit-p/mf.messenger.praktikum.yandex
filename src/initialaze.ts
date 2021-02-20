import {apiController} from "./classes/apiController.js";
import {Router} from "./classes/classRouter.js"

export const api = new apiController()
export const router = new Router(".wrapper")