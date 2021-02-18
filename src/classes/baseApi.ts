export class BaseAPI {
    
    create(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    request(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    update(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }

    delete(): Promise<void | XMLHttpRequest> { throw new Error('Not implemented'); }
}