import {Router} from "./classes/classRouter.js";
import {Login} from "./pages/login/login.js";
import {Choose_a_chat} from "./pages/choose_a_chat/choose_a_chat.js";
import {Signin} from "./pages/signin/signin.js";
import{Profile} from "./pages/profile/profile.js"
import{Change_user_data} from "./pages/profile/change_user_data/change_user_data.js";
import {Change_password} from "./pages/profile/change_password/change_password.js"



const router: Router = new Router ('.app');

router
    .use('/', Login)
    .use("/signin", Signin)
    .use('/chat', Choose_a_chat)
    .use('/profile', Profile)
    .use('/profile/change-user-data', Change_user_data)
    .use('/profile/change-password', Change_password)
    .start()
