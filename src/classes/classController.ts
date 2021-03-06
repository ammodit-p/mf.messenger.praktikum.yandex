import {router} from '../initialaze';
import {store} from '../store/Store';
import {Indexed} from '../types';

export class Controller {
  constructor() {}

  set(path: string, data: Indexed): Controller {
    store.set(path, data);
    return this;
  }

  go(path: string): void {
    router.go(path);
  }

  delete(path: string): void {
    store.delete(path);
  }

  get(path: string): any {
    store.get(path);
  }
}
