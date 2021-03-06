/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { App } from "./components/apps-menu/apps-menu";
import { Social } from "./components/footer/footer";
import { App as App1 } from "./components/apps-menu/apps-menu";
export namespace Components {
    interface TokAppsMenu {
        "apps": App[];
    }
    interface TokAppsSideMenu {
        "showDisabled": boolean;
    }
    interface TokContent {
    }
    interface TokFooter {
        "appsSideMenu": () => Promise<void>;
        "social": Social[];
    }
    interface TokHeader {
        "apps": App[];
        "logoHref": string;
        "pageTitle": string;
        "sideMenu": boolean;
    }
    interface TokMain {
        "hasHeader": boolean;
    }
    interface TokSideMenu {
        "footerFixed": (fixed: boolean) => Promise<void>;
        "open": (open: boolean) => Promise<void>;
    }
}
declare global {
    interface HTMLTokAppsMenuElement extends Components.TokAppsMenu, HTMLStencilElement {
    }
    var HTMLTokAppsMenuElement: {
        prototype: HTMLTokAppsMenuElement;
        new (): HTMLTokAppsMenuElement;
    };
    interface HTMLTokAppsSideMenuElement extends Components.TokAppsSideMenu, HTMLStencilElement {
    }
    var HTMLTokAppsSideMenuElement: {
        prototype: HTMLTokAppsSideMenuElement;
        new (): HTMLTokAppsSideMenuElement;
    };
    interface HTMLTokContentElement extends Components.TokContent, HTMLStencilElement {
    }
    var HTMLTokContentElement: {
        prototype: HTMLTokContentElement;
        new (): HTMLTokContentElement;
    };
    interface HTMLTokFooterElement extends Components.TokFooter, HTMLStencilElement {
    }
    var HTMLTokFooterElement: {
        prototype: HTMLTokFooterElement;
        new (): HTMLTokFooterElement;
    };
    interface HTMLTokHeaderElement extends Components.TokHeader, HTMLStencilElement {
    }
    var HTMLTokHeaderElement: {
        prototype: HTMLTokHeaderElement;
        new (): HTMLTokHeaderElement;
    };
    interface HTMLTokMainElement extends Components.TokMain, HTMLStencilElement {
    }
    var HTMLTokMainElement: {
        prototype: HTMLTokMainElement;
        new (): HTMLTokMainElement;
    };
    interface HTMLTokSideMenuElement extends Components.TokSideMenu, HTMLStencilElement {
    }
    var HTMLTokSideMenuElement: {
        prototype: HTMLTokSideMenuElement;
        new (): HTMLTokSideMenuElement;
    };
    interface HTMLElementTagNameMap {
        "tok-apps-menu": HTMLTokAppsMenuElement;
        "tok-apps-side-menu": HTMLTokAppsSideMenuElement;
        "tok-content": HTMLTokContentElement;
        "tok-footer": HTMLTokFooterElement;
        "tok-header": HTMLTokHeaderElement;
        "tok-main": HTMLTokMainElement;
        "tok-side-menu": HTMLTokSideMenuElement;
    }
}
declare namespace LocalJSX {
    interface TokAppsMenu {
        "apps"?: App[];
        "onClose"?: (event: CustomEvent<void>) => void;
    }
    interface TokAppsSideMenu {
        "onAppsSideMenu"?: (event: CustomEvent<void>) => void;
        "showDisabled"?: boolean;
    }
    interface TokContent {
    }
    interface TokFooter {
        "social"?: Social[];
    }
    interface TokHeader {
        "apps"?: App[];
        "logoHref"?: string;
        "onSideMenuOpen"?: (event: CustomEvent<boolean>) => void;
        "pageTitle"?: string;
        "sideMenu"?: boolean;
    }
    interface TokMain {
        "hasHeader"?: boolean;
    }
    interface TokSideMenu {
    }
    interface IntrinsicElements {
        "tok-apps-menu": TokAppsMenu;
        "tok-apps-side-menu": TokAppsSideMenu;
        "tok-content": TokContent;
        "tok-footer": TokFooter;
        "tok-header": TokHeader;
        "tok-main": TokMain;
        "tok-side-menu": TokSideMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tok-apps-menu": LocalJSX.TokAppsMenu & JSXBase.HTMLAttributes<HTMLTokAppsMenuElement>;
            "tok-apps-side-menu": LocalJSX.TokAppsSideMenu & JSXBase.HTMLAttributes<HTMLTokAppsSideMenuElement>;
            "tok-content": LocalJSX.TokContent & JSXBase.HTMLAttributes<HTMLTokContentElement>;
            "tok-footer": LocalJSX.TokFooter & JSXBase.HTMLAttributes<HTMLTokFooterElement>;
            "tok-header": LocalJSX.TokHeader & JSXBase.HTMLAttributes<HTMLTokHeaderElement>;
            "tok-main": LocalJSX.TokMain & JSXBase.HTMLAttributes<HTMLTokMainElement>;
            "tok-side-menu": LocalJSX.TokSideMenu & JSXBase.HTMLAttributes<HTMLTokSideMenuElement>;
        }
    }
}
