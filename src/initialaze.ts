import {apiController} from "./classes/apiController.js";
import {Router} from "./classes/classRouter.js";
import {authApi} from "./apis/auth_api.js";

export const api = new apiController();
api
    .use("auth", authApi);

export const router = new Router(".wrapper")