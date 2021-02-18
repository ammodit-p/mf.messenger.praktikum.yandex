import {Route} from "./classRoute";
import {Block} from "./classBlock";

export class Router {
    static __instance: any;
    routes: Route[];
    history: History;
    _currentRoute: Route | null;
    _rootQuery: string;
    
    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: Block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
      return this
    }

    start() {
      window.onpopstate = (event: any) => { //да, я знаю что это type PopStateEvent. Но TS начал ругаться что location does not exist on type 'EventTarget' и у меня не было времени разбираться в чем дело
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
      
        if (!route) {
          return
        }

       if (this._currentRoute) {
            this._currentRoute.leave();
       }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
      this.history.pushState({}, "", pathname);
      this._onRoute(pathname);
    }


    back() {
      this.history.back()
    }

    forward() {
      this.history.forward()
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }
}