Netlify: https://boring-bell-1c1539.netlify.app/

Макеты: https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=1%3A2

Можно я svg вынесу в отдельные файлы и пропишу их через css в следующем спринте?) оставьте как долг

/////////////

Чтобы задекларировать ambient module  в node.d.ts надо прописать по такому вот виду:

declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}



Затем делать import вида:
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");

Да, вместе с ///


еще пример (для handlebars.d.ts):
interface Handlebars {
    compile: (any) => any;
}

declare const Handlebars: Handlebars;

declare module "handlebars" {
    export = Handlebars;
}