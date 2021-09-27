import { ComponentInterface } from '../../../../../../stencil-public-runtime';
export declare const createSpecComponent: <T>(componentTag: string, component: ComponentInterface | ComponentInterface[], props?: Record<string, any>) => Promise<T>;
export declare const getChild: (component: HTMLElement) => HTMLElement;
export declare const getAttributes: (component: HTMLElement) => Record<string, string>;
