import {Block} from "../../classes/classBlock.js";
import {profile_tmpl} from "./profile_tmpl.js";
import {events} from "./profile_events.js"
// import profile_controller from "./profile_controller.js"


export class Profile extends Block {
    constructor () {
        super("div", {
            data: {},
            events: events
        }, profile_tmpl, "profile");
    }

    componentDidMount () {
        // profile_controller.get()
    }
}