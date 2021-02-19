import {Router} from "./classes/classRouter.js";
import {Login} from "./pages/login/login.js";

const router: Router = new Router ('.wrapper');

router
    .use('/', Login)
    .start()