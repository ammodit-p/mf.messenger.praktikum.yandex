import {Router} from "./classes/classRouter";
import {Login} from "./pages/LOGIN/login";
import {Chats} from "./pages/CHATS/chats"
import {Signin} from "./pages/SIGNIN/signin";
import{Profile} from "./pages/PROFILE/profile"
import{Change_user} from "./pages/CHANGE_USER_DATA/change_user";
import {Change_password} from "./pages/CHANGE_PASSWORD/change_password"
import {FourHundred} from "./pages/400/400";
import {FiveHundred} from "./pages/500/500"



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
