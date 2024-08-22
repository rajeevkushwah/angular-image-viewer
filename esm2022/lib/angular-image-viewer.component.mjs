import { Component, HostListener, Optional, Inject, Input, Output, EventEmitter } from '@angular/core';
import { CustomImageEvent } from './models/custom-image-event-model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "./directives/full-screen.directive";
function AngularImageViewerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "div", 8);
    i0.ɵɵelementEnd();
} }
function AngularImageViewerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.rotateCounterClockwise()); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.rotateCounterClockwise);
} }
function AngularImageViewerComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.rotateClockwise()); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.rotateClockwise);
} }
function AngularImageViewerComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.zoomOut()); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.zoomOut);
} }
function AngularImageViewerComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.zoomIn()); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.zoomIn);
} }
function AngularImageViewerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_8_Template_button_click_0_listener() { const cBtn_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fireCustomEvent(cBtn_r7.name, ctx_r1.index)); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cBtn_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(cBtn_r7.icon);
} }
function AngularImageViewerComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleFullscreen()); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.fullscreen);
} }
function AngularImageViewerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 12);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_div_10_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prevImage($event)); });
    i0.ɵɵelement(2, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function AngularImageViewerComponent_div_10_Template_button_click_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextImage($event)); });
    i0.ɵɵelement(4, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵproperty("disabled", ctx_r1.index === 0);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.prev);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnClass);
    i0.ɵɵproperty("disabled", ctx_r1.index === ctx_r1.src.length - 1);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.config.btnIcons.next);
} }
const DEFAULT_CONFIG = {
    btnClass: 'default',
    zoomFactor: 0.1,
    containerBackgroundColor: '#ccc',
    wheelZoom: false,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    btnShow: {
        zoomIn: true,
        zoomOut: true,
        rotateClockwise: true,
        rotateCounterClockwise: true,
        next: true,
        prev: true
    },
    btnIcons: {
        zoomIn: 'fa fa-plus',
        zoomOut: 'fa fa-minus',
        rotateClockwise: 'fa fa-repeat',
        rotateCounterClockwise: 'fa fa-undo',
        next: 'fa fa-arrow-right',
        prev: 'fa fa-arrow-left',
        fullscreen: 'fa fa-arrows-alt',
    }
};
export class AngularImageViewerComponent {
    moduleConfig;
    sanitizer;
    src;
    screenHeightOccupied; // In Px
    index = 0;
    config;
    indexChange = new EventEmitter();
    configChange = new EventEmitter();
    customImageEvent = new EventEmitter();
    styleHeight = '98vh';
    style = { transform: '', msTransform: '', oTransform: '', webkitTransform: '' };
    fullscreen = false;
    loading = true;
    scale = 1;
    rotation = 0;
    translateX = 0;
    translateY = 0;
    prevX;
    prevY;
    hovered = false;
    constructor(moduleConfig, sanitizer) {
        this.moduleConfig = moduleConfig;
        this.sanitizer = sanitizer;
    }
    ngOnChanges(changes) {
        if (changes.screenHeightOccupied) {
            this.styleHeight = 'calc(98vh - ' + this.screenHeightOccupied + 'px)';
            // console.log('Style Height:', this.styleHeight);
        }
    }
    ngOnInit() {
        const merged = this.mergeConfig(DEFAULT_CONFIG, this.moduleConfig);
        this.config = this.mergeConfig(merged, this.config);
        this.triggerConfigBinding();
    }
    nextImage(event) {
        if (this.canNavigate(event) && this.index < this.src.length - 1) {
            this.loading = true;
            this.index++;
            this.triggerIndexBinding();
            this.reset();
        }
    }
    prevImage(event) {
        if (this.canNavigate(event) && this.index > 0) {
            this.loading = true;
            this.index--;
            this.triggerIndexBinding();
            this.reset();
        }
    }
    zoomIn() {
        this.scale *= (1 + this.config.zoomFactor);
        this.updateStyle();
    }
    zoomOut() {
        if (this.scale > this.config.zoomFactor) {
            this.scale /= (1 + this.config.zoomFactor);
        }
        this.updateStyle();
    }
    scrollZoom(evt) {
        if (this.config.wheelZoom) {
            evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
            return false;
        }
    }
    rotateClockwise() {
        this.rotation += 90;
        this.updateStyle();
    }
    rotateCounterClockwise() {
        this.rotation -= 90;
        this.updateStyle();
    }
    onLoad(url) {
        console.log('Loading Image Done:', url);
        this.loading = false;
    }
    onLoadStart(url) {
        console.log('Loading Image:', url);
        this.loading = true;
    }
    imageNotFound(url) {
        console.log('Image not found Url:', url);
    }
    onDragOver(evt) {
        this.translateX += (evt.clientX - this.prevX);
        this.translateY += (evt.clientY - this.prevY);
        this.prevX = evt.clientX;
        this.prevY = evt.clientY;
        this.updateStyle();
    }
    onDragStart(evt) {
        if (evt.dataTransfer && evt.dataTransfer.setDragImage) {
            evt.dataTransfer.setDragImage(evt.target.nextElementSibling, 0, 0);
        }
        this.prevX = evt.clientX;
        this.prevY = evt.clientY;
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        if (!this.fullscreen) {
            this.reset();
        }
    }
    triggerIndexBinding() {
        this.indexChange.emit(this.index);
    }
    triggerConfigBinding() {
        this.configChange.next(this.config);
    }
    fireCustomEvent(name, imageIndex) {
        this.customImageEvent.emit(new CustomImageEvent(name, imageIndex));
    }
    reset() {
        this.scale = 1;
        this.rotation = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.updateStyle();
    }
    onMouseOver() {
        this.hovered = true;
    }
    onMouseLeave() {
        this.hovered = false;
    }
    canNavigate(event) {
        return event == null || (this.config.allowKeyboardNavigation && this.hovered);
    }
    updateStyle() {
        this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;
        this.style.msTransform = this.style.transform;
        this.style.webkitTransform = this.style.transform;
        this.style.oTransform = this.style.transform;
    }
    mergeConfig(defaultValues, overrideValues) {
        let result = { ...defaultValues };
        if (overrideValues) {
            result = { ...defaultValues, ...overrideValues };
            if (overrideValues.btnIcons) {
                result.btnIcons = { ...defaultValues.btnIcons, ...overrideValues.btnIcons };
            }
        }
        return result;
    }
    static ɵfac = function AngularImageViewerComponent_Factory(t) { return new (t || AngularImageViewerComponent)(i0.ɵɵdirectiveInject('config', 8), i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AngularImageViewerComponent, selectors: [["angular-image-viewer"]], hostBindings: function AngularImageViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.ArrowRight", function AngularImageViewerComponent_keyup_ArrowRight_HostBindingHandler($event) { return ctx.nextImage($event); }, false, i0.ɵɵresolveWindow)("keyup.ArrowLeft", function AngularImageViewerComponent_keyup_ArrowLeft_HostBindingHandler($event) { return ctx.prevImage($event); }, false, i0.ɵɵresolveWindow)("mouseover", function AngularImageViewerComponent_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function AngularImageViewerComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } }, inputs: { src: "src", screenHeightOccupied: "screenHeightOccupied", index: "index", config: "config" }, outputs: { indexChange: "indexChange", configChange: "configChange", customImageEvent: "customImageEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 15, consts: [[1, "img-container", 3, "wheel", "dragover", "appScreenfull"], ["alt", "Image not found...", 3, "dragstart", "load", "error", "loadstart", "src", "ngStyle"], ["class", "spinner-container", 4, "ngIf"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", "id", "ngx-fs-btn", 3, "class", "click", 4, "ngIf"], ["class", "nav-button-container", 4, "ngIf"], [1, "spinner-container"], [1, "spinner"], ["type", "button", 3, "click"], ["type", "button", "id", "ngx-fs-btn", 3, "click"], [1, "nav-button-container"], ["type", "button", 3, "click", "disabled"]], template: function AngularImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("wheel", function AngularImageViewerComponent_Template_div_wheel_0_listener($event) { return ctx.scrollZoom($event); })("dragover", function AngularImageViewerComponent_Template_div_dragover_0_listener($event) { return ctx.onDragOver($event); });
            i0.ɵɵelementStart(1, "img", 1);
            i0.ɵɵlistener("dragstart", function AngularImageViewerComponent_Template_img_dragstart_1_listener($event) { return ctx.onDragStart($event); })("load", function AngularImageViewerComponent_Template_img_load_1_listener() { return ctx.onLoad(ctx.src[ctx.index]); })("error", function AngularImageViewerComponent_Template_img_error_1_listener() { return ctx.imageNotFound(ctx.src[ctx.index]); })("loadstart", function AngularImageViewerComponent_Template_img_loadstart_1_listener() { return ctx.onLoadStart(ctx.src[ctx.index]); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "div");
            i0.ɵɵtemplate(3, AngularImageViewerComponent_div_3_Template, 2, 0, "div", 2)(4, AngularImageViewerComponent_button_4_Template, 2, 4, "button", 3)(5, AngularImageViewerComponent_button_5_Template, 2, 4, "button", 3)(6, AngularImageViewerComponent_button_6_Template, 2, 4, "button", 3)(7, AngularImageViewerComponent_button_7_Template, 2, 4, "button", 3)(8, AngularImageViewerComponent_button_8_Template, 2, 4, "button", 4)(9, AngularImageViewerComponent_button_9_Template, 2, 4, "button", 5)(10, AngularImageViewerComponent_div_10_Template, 5, 10, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("height", ctx.styleHeight)("background-color", ctx.config.containerBackgroundColor);
            i0.ɵɵproperty("appScreenfull", ctx.fullscreen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.src[ctx.index], i0.ɵɵsanitizeUrl)("ngStyle", ctx.style);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.btnShow.rotateCounterClockwise);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.btnShow.rotateClockwise);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.btnShow.zoomOut);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.btnShow.zoomIn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.config.customBtns);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.allowFullscreen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.src.length > 1);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgStyle, i3.FullScreenDirective], styles: [".img-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:90%;max-height:95%}.img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:99;position:absolute;right:15px}.img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){cursor:pointer}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(1):not(#ngx-fs-btn){bottom:15px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(2):not(#ngx-fs-btn){bottom:65px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(3):not(#ngx-fs-btn){bottom:115px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(4):not(#ngx-fs-btn){bottom:165px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(5):not(#ngx-fs-btn){bottom:215px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(6):not(#ngx-fs-btn){bottom:265px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(7):not(#ngx-fs-btn){bottom:315px}#ngx-fs-btn[_ngcontent-%COMP%]{top:15px}button.default[_ngcontent-%COMP%]{height:40px;width:40px;border:1px solid #555;border-radius:50%;background-color:#fff;opacity:.7;transition:opacity .2s}button.default[_ngcontent-%COMP%]:hover{opacity:1}button.default[_ngcontent-%COMP%]:disabled{opacity:.25}.nav-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:relative;right:0;margin:0 10px}.nav-button-container[_ngcontent-%COMP%]{text-align:center;position:absolute;z-index:98;bottom:10px;left:0;right:0}.spinner-container[_ngcontent-%COMP%]{position:absolute;inset:0;width:60px;height:60px;margin:auto;padding:10px;background-color:#0006;border-radius:25%}.spinner[_ngcontent-%COMP%]{border-width:7px;border-style:solid;border-color:#ccc;border-bottom-color:#222;border-radius:50%;height:100%;width:100%;box-sizing:border-box;-webkit-animation:_ngcontent-%COMP%_rotation 2s linear infinite;-moz-animation:rotation 2s linear infinite;-o-animation:rotation 2s linear infinite;animation:_ngcontent-%COMP%_rotation 2s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-webkit-keyframes _ngcontent-%COMP%_rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-moz-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-o-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularImageViewerComponent, [{
        type: Component,
        args: [{ selector: 'angular-image-viewer', template: "<div [appScreenfull]=\"fullscreen\" class=\"img-container\" [style.height]=\"styleHeight\"\n    [style.backgroundColor]=\"config.containerBackgroundColor\" (wheel)=\"scrollZoom($event)\"\n    (dragover)=\"onDragOver($event)\">\n    <img [src]=\"src[index]\" [ngStyle]=\"style\" alt=\"Image not found...\" (dragstart)=\"onDragStart($event)\"\n        (load)=\"onLoad(src[index])\" (error)=\"imageNotFound(src[index])\" (loadstart)=\"onLoadStart(src[index])\" />\n    <!-- Div below will be used to hide the 'ghost' image when dragging -->\n    <div></div>\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n        <div class=\"spinner\"></div>\n    </div>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateCounterClockwise\"\n        (click)=\"rotateCounterClockwise()\">\n        <span [class]=\"config.btnIcons.rotateCounterClockwise\"></span>\n    </button>\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateClockwise\" (click)=\"rotateClockwise()\">\n        <span [class]=\"config.btnIcons.rotateClockwise\"></span>\n    </button>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomOut\" (click)=\"zoomOut()\">\n        <span [class]=\"config.btnIcons.zoomOut\"></span>\n    </button>\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomIn\" (click)=\"zoomIn()\">\n        <span [class]=\"config.btnIcons.zoomIn\"></span>\n    </button>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngFor=\"let cBtn of config.customBtns\"\n        (click)=\"fireCustomEvent(cBtn.name, index)\">\n        <span [class]=\"cBtn.icon\"></span>\n    </button>\n\n    <button type=\"button\" id=\"ngx-fs-btn\" [class]=\"config.btnClass\" (click)=\"toggleFullscreen()\"\n        *ngIf=\"config.allowFullscreen\">\n        <span [class]=\"config.btnIcons.fullscreen\"></span>\n    </button>\n\n    <div class=\"nav-button-container\" *ngIf=\"src.length > 1\">\n        <button type=\"button\" [class]=\"config.btnClass\" (click)=\"prevImage($event)\" [disabled]=\"index === 0\">\n            <span [class]=\"config.btnIcons.prev\"></span>\n        </button>\n        <button type=\"button\" [class]=\"config.btnClass\" (click)=\"nextImage($event)\"\n            [disabled]=\"index === src.length - 1\">\n            <span [class]=\"config.btnIcons.next\"></span>\n        </button>\n    </div>\n</div>", styles: [".img-container{width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.img-container img{max-width:90%;max-height:95%}.img-container button{z-index:99;position:absolute;right:15px}.img-container button:not(:disabled){cursor:pointer}.img-container>button:nth-of-type(1):not(#ngx-fs-btn){bottom:15px}.img-container>button:nth-of-type(2):not(#ngx-fs-btn){bottom:65px}.img-container>button:nth-of-type(3):not(#ngx-fs-btn){bottom:115px}.img-container>button:nth-of-type(4):not(#ngx-fs-btn){bottom:165px}.img-container>button:nth-of-type(5):not(#ngx-fs-btn){bottom:215px}.img-container>button:nth-of-type(6):not(#ngx-fs-btn){bottom:265px}.img-container>button:nth-of-type(7):not(#ngx-fs-btn){bottom:315px}#ngx-fs-btn{top:15px}button.default{height:40px;width:40px;border:1px solid #555;border-radius:50%;background-color:#fff;opacity:.7;transition:opacity .2s}button.default:hover{opacity:1}button.default:disabled{opacity:.25}.nav-button-container>button{position:relative;right:0;margin:0 10px}.nav-button-container{text-align:center;position:absolute;z-index:98;bottom:10px;left:0;right:0}.spinner-container{position:absolute;inset:0;width:60px;height:60px;margin:auto;padding:10px;background-color:#0006;border-radius:25%}.spinner{border-width:7px;border-style:solid;border-color:#ccc;border-bottom-color:#222;border-radius:50%;height:100%;width:100%;box-sizing:border-box;-webkit-animation:rotation 2s linear infinite;-moz-animation:rotation 2s linear infinite;-o-animation:rotation 2s linear infinite;animation:rotation 2s linear infinite}@keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-moz-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-o-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}\n"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['config']
            }] }, { type: i1.DomSanitizer }], { src: [{
            type: Input
        }], screenHeightOccupied: [{
            type: Input
        }], index: [{
            type: Input
        }], config: [{
            type: Input
        }], indexChange: [{
            type: Output
        }], configChange: [{
            type: Output
        }], customImageEvent: [{
            type: Output
        }], nextImage: [{
            type: HostListener,
            args: ['window:keyup.ArrowRight', ['$event']]
        }], prevImage: [{
            type: HostListener,
            args: ['window:keyup.ArrowLeft', ['$event']]
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseover']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AngularImageViewerComponent, { className: "AngularImageViewerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1pbWFnZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1pbWFnZS12aWV3ZXIvc3JjL2xpYi9hbmd1bGFyLWltYWdlLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWltYWdlLXZpZXdlci9zcmMvbGliL2FuZ3VsYXItaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXpJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7SUNLakUsOEJBQStDO0lBQzNDLHlCQUEyQjtJQUMvQixpQkFBTTs7OztJQUVOLGlDQUN1QztJQUFuQywwTEFBUywrQkFBd0IsS0FBQztJQUNsQyx1QkFBOEQ7SUFDbEUsaUJBQVM7OztJQUhhLHFDQUF5QjtJQUVyQyxjQUFnRDtJQUFoRCw0REFBZ0Q7Ozs7SUFFMUQsaUNBQW1IO0lBQTVCLDBMQUFTLHdCQUFpQixLQUFDO0lBQzlHLHVCQUF1RDtJQUMzRCxpQkFBUzs7O0lBRmEscUNBQXlCO0lBQ3JDLGNBQXlDO0lBQXpDLHFEQUF5Qzs7OztJQUduRCxpQ0FBbUc7SUFBcEIsMExBQVMsZ0JBQVMsS0FBQztJQUM5Rix1QkFBK0M7SUFDbkQsaUJBQVM7OztJQUZhLHFDQUF5QjtJQUNyQyxjQUFpQztJQUFqQyw2Q0FBaUM7Ozs7SUFFM0MsaUNBQWlHO0lBQW5CLDBMQUFTLGVBQVEsS0FBQztJQUM1Rix1QkFBOEM7SUFDbEQsaUJBQVM7OztJQUZhLHFDQUF5QjtJQUNyQyxjQUFnQztJQUFoQyw0Q0FBZ0M7Ozs7SUFHMUMsaUNBQ2dEO0lB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NUIsaURBQTRCO1lBRzVCLGNBQTJCO1lBQTNCLGdEQUEyQjtZQUlYLGNBQW9CO1lBQXBCLCtDQUFvQjtZQU1oRixjQUE0QjtZQUE1QixpREFBNEI7WUFJRSxjQUFvQjtZQUFwQix5Q0FBb0I7OztpRkRFOUMsMkJBQTJCO2NBTHZDLFNBQVM7MkJBQ0Usc0JBQXNCOztzQkF3Q25CLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTtnREFqQ3hDLEdBQUc7a0JBREYsS0FBSztZQUlOLG9CQUFvQjtrQkFEbkIsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSztZQUlOLE1BQU07a0JBREwsS0FBSztZQUlOLFdBQVc7a0JBRFYsTUFBTTtZQUlQLFlBQVk7a0JBRFgsTUFBTTtZQUlQLGdCQUFnQjtrQkFEZixNQUFNO1lBaUNQLFNBQVM7a0JBRFIsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVduRCxTQUFTO2tCQURSLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFpR2xELFdBQVc7a0JBRFYsWUFBWTttQkFBQyxXQUFXO1lBTXpCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZOztrRkFuS2YsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlVmlld2VyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvaW1hZ2Utdmlld2VyLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBDdXN0b21JbWFnZUV2ZW50IH0gZnJvbSAnLi9tb2RlbHMvY3VzdG9tLWltYWdlLWV2ZW50LW1vZGVsJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBJbWFnZVZpZXdlckNvbmZpZyA9IHtcbiAgYnRuQ2xhc3M6ICdkZWZhdWx0JyxcbiAgem9vbUZhY3RvcjogMC4xLFxuICBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcbiAgd2hlZWxab29tOiBmYWxzZSxcbiAgYWxsb3dGdWxsc2NyZWVuOiB0cnVlLFxuICBhbGxvd0tleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcbiAgYnRuU2hvdzoge1xuICAgIHpvb21JbjogdHJ1ZSxcbiAgICB6b29tT3V0OiB0cnVlLFxuICAgIHJvdGF0ZUNsb2Nrd2lzZTogdHJ1ZSxcbiAgICByb3RhdGVDb3VudGVyQ2xvY2t3aXNlOiB0cnVlLFxuICAgIG5leHQ6IHRydWUsXG4gICAgcHJldjogdHJ1ZVxuICB9LFxuICBidG5JY29uczoge1xuICAgIHpvb21JbjogJ2ZhIGZhLXBsdXMnLFxuICAgIHpvb21PdXQ6ICdmYSBmYS1taW51cycsXG4gICAgcm90YXRlQ2xvY2t3aXNlOiAnZmEgZmEtcmVwZWF0JyxcbiAgICByb3RhdGVDb3VudGVyQ2xvY2t3aXNlOiAnZmEgZmEtdW5kbycsXG4gICAgbmV4dDogJ2ZhIGZhLWFycm93LXJpZ2h0JyxcbiAgICBwcmV2OiAnZmEgZmEtYXJyb3ctbGVmdCcsXG4gICAgZnVsbHNjcmVlbjogJ2ZhIGZhLWFycm93cy1hbHQnLFxuICB9XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5ndWxhci1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFySW1hZ2VWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KClcbiAgc3JjOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBzY3JlZW5IZWlnaHRPY2N1cGllZDogMDsgICAgICAgICAgICAgLy8gSW4gUHhcblxuICBASW5wdXQoKVxuICBpbmRleCA9IDA7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBJbWFnZVZpZXdlckNvbmZpZztcblxuICBAT3V0cHV0KClcbiAgaW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJbWFnZVZpZXdlckNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGN1c3RvbUltYWdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21JbWFnZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzdHlsZUhlaWdodCA9ICc5OHZoJztcblxuICBwdWJsaWMgc3R5bGUgPSB7IHRyYW5zZm9ybTogJycsIG1zVHJhbnNmb3JtOiAnJywgb1RyYW5zZm9ybTogJycsIHdlYmtpdFRyYW5zZm9ybTogJycgfTtcbiAgcHVibGljIGZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRpbmcgPSB0cnVlO1xuICBwcml2YXRlIHNjYWxlID0gMTtcbiAgcHJpdmF0ZSByb3RhdGlvbiA9IDA7XG4gIHByaXZhdGUgdHJhbnNsYXRlWCA9IDA7XG4gIHByaXZhdGUgdHJhbnNsYXRlWSA9IDA7XG4gIHByaXZhdGUgcHJldlg6IG51bWJlcjtcbiAgcHJpdmF0ZSBwcmV2WTogbnVtYmVyO1xuICBwcml2YXRlIGhvdmVyZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdjb25maWcnKSBwdWJsaWMgbW9kdWxlQ29uZmlnOiBJbWFnZVZpZXdlckNvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNjcmVlbkhlaWdodE9jY3VwaWVkKSB7XG4gICAgICB0aGlzLnN0eWxlSGVpZ2h0ID0gJ2NhbGMoOTh2aCAtICcgKyB0aGlzLnNjcmVlbkhlaWdodE9jY3VwaWVkICsgJ3B4KSc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU3R5bGUgSGVpZ2h0OicsIHRoaXMuc3R5bGVIZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG1lcmdlZCA9IHRoaXMubWVyZ2VDb25maWcoREVGQVVMVF9DT05GSUcsIHRoaXMubW9kdWxlQ29uZmlnKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMubWVyZ2VDb25maWcobWVyZ2VkLCB0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyQ29uZmlnQmluZGluZygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBuZXh0SW1hZ2UoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5OYXZpZ2F0ZShldmVudCkgJiYgdGhpcy5pbmRleCA8IHRoaXMuc3JjLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB0aGlzLnRyaWdnZXJJbmRleEJpbmRpbmcoKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAuQXJyb3dMZWZ0JywgWyckZXZlbnQnXSlcbiAgcHJldkltYWdlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2FuTmF2aWdhdGUoZXZlbnQpICYmIHRoaXMuaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgdGhpcy50cmlnZ2VySW5kZXhCaW5kaW5nKCk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgem9vbUluKCkge1xuICAgIHRoaXMuc2NhbGUgKj0gKDEgKyB0aGlzLmNvbmZpZy56b29tRmFjdG9yKTtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGlmICh0aGlzLnNjYWxlID4gdGhpcy5jb25maWcuem9vbUZhY3Rvcikge1xuICAgICAgdGhpcy5zY2FsZSAvPSAoMSArIHRoaXMuY29uZmlnLnpvb21GYWN0b3IpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gIH1cblxuICBzY3JvbGxab29tKGV2dCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy53aGVlbFpvb20pIHtcbiAgICAgIGV2dC5kZWx0YVkgPiAwID8gdGhpcy56b29tT3V0KCkgOiB0aGlzLnpvb21JbigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZUNsb2Nrd2lzZSgpIHtcbiAgICB0aGlzLnJvdGF0aW9uICs9IDkwO1xuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgfVxuXG4gIHJvdGF0ZUNvdW50ZXJDbG9ja3dpc2UoKSB7XG4gICAgdGhpcy5yb3RhdGlvbiAtPSA5MDtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gIH1cblxuICBvbkxvYWQodXJsKSB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgSW1hZ2UgRG9uZTonLCB1cmwpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgb25Mb2FkU3RhcnQodXJsKSB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgSW1hZ2U6JywgdXJsKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICB9XG5cbiAgaW1hZ2VOb3RGb3VuZCh1cmwpIHtcbiAgICBjb25zb2xlLmxvZygnSW1hZ2Ugbm90IGZvdW5kIFVybDonLCB1cmwpO1xuICB9XG5cbiAgb25EcmFnT3ZlcihldnQpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVggKz0gKGV2dC5jbGllbnRYIC0gdGhpcy5wcmV2WCk7XG4gICAgdGhpcy50cmFuc2xhdGVZICs9IChldnQuY2xpZW50WSAtIHRoaXMucHJldlkpO1xuICAgIHRoaXMucHJldlggPSBldnQuY2xpZW50WDtcbiAgICB0aGlzLnByZXZZID0gZXZ0LmNsaWVudFk7XG4gICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICB9XG5cbiAgb25EcmFnU3RhcnQoZXZ0KSB7XG4gICAgaWYgKGV2dC5kYXRhVHJhbnNmZXIgJiYgZXZ0LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UpIHtcbiAgICAgIGV2dC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGV2dC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLCAwLCAwKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2WCA9IGV2dC5jbGllbnRYO1xuICAgIHRoaXMucHJldlkgPSBldnQuY2xpZW50WTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcbiAgICBpZiAoIXRoaXMuZnVsbHNjcmVlbikge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJJbmRleEJpbmRpbmcoKSB7XG4gICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgdHJpZ2dlckNvbmZpZ0JpbmRpbmcoKSB7XG4gICAgdGhpcy5jb25maWdDaGFuZ2UubmV4dCh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBmaXJlQ3VzdG9tRXZlbnQobmFtZSwgaW1hZ2VJbmRleCkge1xuICAgIHRoaXMuY3VzdG9tSW1hZ2VFdmVudC5lbWl0KG5ldyBDdXN0b21JbWFnZUV2ZW50KG5hbWUsIGltYWdlSW5kZXgpKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgIHRoaXMudHJhbnNsYXRlWCA9IDA7XG4gICAgdGhpcy50cmFuc2xhdGVZID0gMDtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKVxuICBvbk1vdXNlT3ZlcigpIHtcbiAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuTmF2aWdhdGUoZXZlbnQ6IGFueSkge1xuICAgIHJldHVybiBldmVudCA9PSBudWxsIHx8ICh0aGlzLmNvbmZpZy5hbGxvd0tleWJvYXJkTmF2aWdhdGlvbiAmJiB0aGlzLmhvdmVyZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpIHtcbiAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnRyYW5zbGF0ZVh9cHgsICR7dGhpcy50cmFuc2xhdGVZfXB4KSByb3RhdGUoJHt0aGlzLnJvdGF0aW9ufWRlZykgc2NhbGUoJHt0aGlzLnNjYWxlfSlgO1xuICAgIHRoaXMuc3R5bGUubXNUcmFuc2Zvcm0gPSB0aGlzLnN0eWxlLnRyYW5zZm9ybTtcbiAgICB0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRoaXMuc3R5bGUudHJhbnNmb3JtO1xuICAgIHRoaXMuc3R5bGUub1RyYW5zZm9ybSA9IHRoaXMuc3R5bGUudHJhbnNmb3JtO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZUNvbmZpZyhkZWZhdWx0VmFsdWVzOiBJbWFnZVZpZXdlckNvbmZpZywgb3ZlcnJpZGVWYWx1ZXM6IEltYWdlVmlld2VyQ29uZmlnKTogSW1hZ2VWaWV3ZXJDb25maWcge1xuICAgIGxldCByZXN1bHQ6IEltYWdlVmlld2VyQ29uZmlnID0geyAuLi5kZWZhdWx0VmFsdWVzIH07XG4gICAgaWYgKG92ZXJyaWRlVmFsdWVzKSB7XG4gICAgICByZXN1bHQgPSB7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLm92ZXJyaWRlVmFsdWVzIH07XG5cbiAgICAgIGlmIChvdmVycmlkZVZhbHVlcy5idG5JY29ucykge1xuICAgICAgICByZXN1bHQuYnRuSWNvbnMgPSB7IC4uLmRlZmF1bHRWYWx1ZXMuYnRuSWNvbnMsIC4uLm92ZXJyaWRlVmFsdWVzLmJ0bkljb25zIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxufVxuIiwiPGRpdiBbYXBwU2NyZWVuZnVsbF09XCJmdWxsc2NyZWVuXCIgY2xhc3M9XCJpbWctY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodF09XCJzdHlsZUhlaWdodFwiXG4gICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb25maWcuY29udGFpbmVyQmFja2dyb3VuZENvbG9yXCIgKHdoZWVsKT1cInNjcm9sbFpvb20oJGV2ZW50KVwiXG4gICAgKGRyYWdvdmVyKT1cIm9uRHJhZ092ZXIoJGV2ZW50KVwiPlxuICAgIDxpbWcgW3NyY109XCJzcmNbaW5kZXhdXCIgW25nU3R5bGVdPVwic3R5bGVcIiBhbHQ9XCJJbWFnZSBub3QgZm91bmQuLi5cIiAoZHJhZ3N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCRldmVudClcIlxuICAgICAgICAobG9hZCk9XCJvbkxvYWQoc3JjW2luZGV4XSlcIiAoZXJyb3IpPVwiaW1hZ2VOb3RGb3VuZChzcmNbaW5kZXhdKVwiIChsb2Fkc3RhcnQpPVwib25Mb2FkU3RhcnQoc3JjW2luZGV4XSlcIiAvPlxuICAgIDwhLS0gRGl2IGJlbG93IHdpbGwgYmUgdXNlZCB0byBoaWRlIHRoZSAnZ2hvc3QnIGltYWdlIHdoZW4gZHJhZ2dpbmcgLS0+XG4gICAgPGRpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtjbGFzc109XCJjb25maWcuYnRuQ2xhc3NcIiAqbmdJZj1cImNvbmZpZy5idG5TaG93LnJvdGF0ZUNvdW50ZXJDbG9ja3dpc2VcIlxuICAgICAgICAoY2xpY2spPVwicm90YXRlQ291bnRlckNsb2Nrd2lzZSgpXCI+XG4gICAgICAgIDxzcGFuIFtjbGFzc109XCJjb25maWcuYnRuSWNvbnMucm90YXRlQ291bnRlckNsb2Nrd2lzZVwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbY2xhc3NdPVwiY29uZmlnLmJ0bkNsYXNzXCIgKm5nSWY9XCJjb25maWcuYnRuU2hvdy5yb3RhdGVDbG9ja3dpc2VcIiAoY2xpY2spPVwicm90YXRlQ2xvY2t3aXNlKClcIj5cbiAgICAgICAgPHNwYW4gW2NsYXNzXT1cImNvbmZpZy5idG5JY29ucy5yb3RhdGVDbG9ja3dpc2VcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbY2xhc3NdPVwiY29uZmlnLmJ0bkNsYXNzXCIgKm5nSWY9XCJjb25maWcuYnRuU2hvdy56b29tT3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPlxuICAgICAgICA8c3BhbiBbY2xhc3NdPVwiY29uZmlnLmJ0bkljb25zLnpvb21PdXRcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzXT1cImNvbmZpZy5idG5DbGFzc1wiICpuZ0lmPVwiY29uZmlnLmJ0blNob3cuem9vbUluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+XG4gICAgICAgIDxzcGFuIFtjbGFzc109XCJjb25maWcuYnRuSWNvbnMuem9vbUluXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzXT1cImNvbmZpZy5idG5DbGFzc1wiICpuZ0Zvcj1cImxldCBjQnRuIG9mIGNvbmZpZy5jdXN0b21CdG5zXCJcbiAgICAgICAgKGNsaWNrKT1cImZpcmVDdXN0b21FdmVudChjQnRuLm5hbWUsIGluZGV4KVwiPlxuICAgICAgICA8c3BhbiBbY2xhc3NdPVwiY0J0bi5pY29uXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJuZ3gtZnMtYnRuXCIgW2NsYXNzXT1cImNvbmZpZy5idG5DbGFzc1wiIChjbGljayk9XCJ0b2dnbGVGdWxsc2NyZWVuKClcIlxuICAgICAgICAqbmdJZj1cImNvbmZpZy5hbGxvd0Z1bGxzY3JlZW5cIj5cbiAgICAgICAgPHNwYW4gW2NsYXNzXT1cImNvbmZpZy5idG5JY29ucy5mdWxsc2NyZWVuXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGRpdiBjbGFzcz1cIm5hdi1idXR0b24tY29udGFpbmVyXCIgKm5nSWY9XCJzcmMubGVuZ3RoID4gMVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbY2xhc3NdPVwiY29uZmlnLmJ0bkNsYXNzXCIgKGNsaWNrKT1cInByZXZJbWFnZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImluZGV4ID09PSAwXCI+XG4gICAgICAgICAgICA8c3BhbiBbY2xhc3NdPVwiY29uZmlnLmJ0bkljb25zLnByZXZcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbY2xhc3NdPVwiY29uZmlnLmJ0bkNsYXNzXCIgKGNsaWNrKT1cIm5leHRJbWFnZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpbmRleCA9PT0gc3JjLmxlbmd0aCAtIDFcIj5cbiAgICAgICAgICAgIDxzcGFuIFtjbGFzc109XCJjb25maWcuYnRuSWNvbnMubmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=