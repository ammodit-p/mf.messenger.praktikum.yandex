import {Router} from "./classes/classRouter.js";
import {Login} from "./pages/login/login.js";
import {Chats} from "./pages/chats/chats.js"
import {Signin} from "./pages/signin/signin.js";
import{Profile} from "./pages/profile/profile.js"
import{Change_user} from "./pages/change_user_data/change_user.js";
import {Change_password} from "./pages/change_password/change_password.js"
import {FourHundred} from "./pages/400/400.js";
import {FiveHundred} from "./pages/500/500.js"



const router: Router = new Router ('.app');

router
    .use('/', Login)
    .use("/signin", Signin)
    .use('/chat', Chats)
    .use('/profile', Profile)
    .use('/change-user-data', Change_user)
    .use('/change-password', Change_password)
    .use('/404', FourHundred)
    .use('/500', FiveHundred)
    .start()
