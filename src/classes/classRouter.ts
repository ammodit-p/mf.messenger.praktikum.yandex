import {Route} from './classRoute';

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

	use(pathname: string, block: any): Router {
		const route = new Route(pathname, block, {rootQuery: this._rootQuery});
		this.routes.push(route);
		return this;
	}

	start(): void {
		window.onpopstate = (event: any) => {
			this._onRoute(event.currentTarget.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string): void {
		const route = this.getRoute(pathname);

		if (!route) {
			return;
		}

		if (this._currentRoute) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;
		route.render();
	}

	go(pathname: string): void {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}


	back(): void {
		this.history.back();
	}

	forward(): void {
		this.history.forward();
	}

	getRoute(pathname: string): Route | undefined {
		return this.routes.find((route) => route.match(pathname));
	}
}
