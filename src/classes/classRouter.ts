import {Route} from './classRoute';
import {EventBus} from './eventBus';

export class Router {
	static __instance: any;
	routes: Route[];
	history: History;
	_currentRoute: Route | null;
	_rootQuery: string;
	eventBus: EventBus;
	errorPage: string;
	EVENTS : {
		GO: string;
	}

	static EVENTS = {
		GO: 'go',
	}

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}
		const eventBus = new EventBus();
		this.eventBus = eventBus;

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
		this._registerEvents(eventBus);
	}

	_registerEvents(eventBus: EventBus): void {
		eventBus.on(Router.EVENTS.GO, this._onErrorPage.bind(this));
	}

	_onErrorPage(): void {
		this.go(this.errorPage);
	}

	setErrorPage(pathname: string): void {
		this.errorPage = pathname;
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
			this.eventBus.emit(Router.EVENTS.GO);
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

	backOnSteps(steps: number): void {
		this.history.go(-steps);
	}

	getRoute(pathname: string): Route | undefined {
		return this.routes.find((route) => route.match(pathname));
	}
}
