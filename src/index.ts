import {Router} from "./classes/classRouter.js";
import {login} from "./pages/login/login.js";

const router: Router = new Router ('.wrapper');

router
    .use('/', login)
    .start()