import Block from "../../classes/classBlock";
import {profile_tmpl} from "./profile_tmpl";
import {events} from "./profile_events"
import profile_controller from "./profile_controller"


export class Profile extends Block {
    constructor () {
        super("div", {
            data: {},
            events: events
        }, profile_tmpl, "profile");
    }

    async _getDataFromApi() {
        await profile_controller.getuser()
    }
}
