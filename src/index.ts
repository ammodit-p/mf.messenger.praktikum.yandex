import {Router} from "./classes/classRouter.js";
import {Login} from "./pages/login/login.js";
// import {Chat} from "./pages/chat/chat.js";
import {Signin} from "./pages/signin/signin.js";

const router: Router = new Router ('.wrapper');

router
    .use('/', Login)
    .use("/signin", Signin)
    .start()