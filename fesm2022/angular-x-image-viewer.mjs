import * as i0 from '@angular/core';
import { Directive, Input, EventEmitter, Component, Optional, Inject, Output, HostListener, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class CustomImageEvent {
    name;
    imageIndex;
    constructor(name, imageIndex) {
        this.name = name;
        this.imageIndex = imageIndex;
    }
}

// import * as screenfull from 'screenfull';
class FullScreenDirective {
    el;
    fullscreenState;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges(changes) {
        console.log('fullscreenState isFirstChange:', changes["fullscreenState"].isFirstChange());
        console.log('fullscreenState', this.fullscreenState);
        // if (screenfull.isEnabled) {
        //   screenfull.toggle(this.el.nativeElement);
        // }
        // if (this.fullscreenState && screenfull.isEnabled) {
        //   screenfull.request(this.el.nativeElement);
        // } else if (screenfull.isEnabled) {
        //   screenfull.exit();
        // }
        // tslint:disable-next-line: no-string-literal
        if (!changes['fullscreenState'].isFirstChange()) {
            if (this.fullscreenState) {
                const element = this.el.nativeElement;
                // tslint:disable-next-line: max-line-length
                const requestMethod = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
                if (requestMethod) { // Native full screen.
                    requestMethod.call(element);
                }
                else {
                    console.log('FullScreen Request Method Not Supported on this browser.');
                }
            }
            else {
                const element = document;
                // tslint:disable-next-line: max-line-length
                const requestMethod = element.cancelFullscreen || element.webkitExitFullscreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullScreen;
                if (requestMethod) { // Native Cancel full screen.
                    requestMethod.call(element);
                }
                else {
                    console.log('FullScreen Cancel Request Method Not Supported on this browser.');
                }
            }
        }
    }
    ngOnInit() {
    }
    static ɵfac = function FullScreenDirective_Factory(t) { return new (t || FullScreenDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullScreenDirective, selectors: [["", "appScreenfull", ""]], inputs: { fullscreenState: [i0.ɵɵInputFlags.None, "appScreenfull", "fullscreenState"] }, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullScreenDirective, [{
        type: Directive,
        args: [{
                selector: '[appScreenfull]'
            }]
    }], () => [{ type: i0.ElementRef }], { fullscreenState: [{
            type: Input,
            args: ['appScreenfull']
        }] }); })();

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
class AngularImageViewerComponent {
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
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgStyle, FullScreenDirective], styles: [".img-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:90%;max-height:95%}.img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:99;position:absolute;right:15px}.img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){cursor:pointer}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(1):not(#ngx-fs-btn){bottom:15px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(2):not(#ngx-fs-btn){bottom:65px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(3):not(#ngx-fs-btn){bottom:115px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(4):not(#ngx-fs-btn){bottom:165px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(5):not(#ngx-fs-btn){bottom:215px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(6):not(#ngx-fs-btn){bottom:265px}.img-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(7):not(#ngx-fs-btn){bottom:315px}#ngx-fs-btn[_ngcontent-%COMP%]{top:15px}button.default[_ngcontent-%COMP%]{height:40px;width:40px;border:1px solid #555;border-radius:50%;background-color:#fff;opacity:.7;transition:opacity .2s}button.default[_ngcontent-%COMP%]:hover{opacity:1}button.default[_ngcontent-%COMP%]:disabled{opacity:.25}.nav-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:relative;right:0;margin:0 10px}.nav-button-container[_ngcontent-%COMP%]{text-align:center;position:absolute;z-index:98;bottom:10px;left:0;right:0}.spinner-container[_ngcontent-%COMP%]{position:absolute;inset:0;width:60px;height:60px;margin:auto;padding:10px;background-color:#0006;border-radius:25%}.spinner[_ngcontent-%COMP%]{border-width:7px;border-style:solid;border-color:#ccc;border-bottom-color:#222;border-radius:50%;height:100%;width:100%;box-sizing:border-box;-webkit-animation:_ngcontent-%COMP%_rotation 2s linear infinite;-moz-animation:rotation 2s linear infinite;-o-animation:rotation 2s linear infinite;animation:_ngcontent-%COMP%_rotation 2s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-webkit-keyframes _ngcontent-%COMP%_rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-moz-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@-o-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}"] });
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

// import { ImageViewerConfig } from 'dist/angular-image-viewer/public-api';
class AngularImageViewerModule {
    static ɵfac = function AngularImageViewerModule_Factory(t) { return new (t || AngularImageViewerModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularImageViewerModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularImageViewerModule, [{
        type: NgModule,
        args: [{
                declarations: [AngularImageViewerComponent, FullScreenDirective],
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    BrowserAnimationsModule,
                ],
                exports: [AngularImageViewerComponent, FullScreenDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularImageViewerModule, { declarations: [AngularImageViewerComponent, FullScreenDirective], imports: [CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule], exports: [AngularImageViewerComponent, FullScreenDirective] }); })();

/*
 * Public API Surface of angular-image-viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularImageViewerComponent, AngularImageViewerModule, CustomImageEvent, FullScreenDirective };
//# sourceMappingURL=angular-x-image-viewer.mjs.map
