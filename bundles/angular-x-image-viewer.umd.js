(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('angular-x-image-viewer', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['angular-x-image-viewer'] = {}, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, core, common, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CustomImageEvent = /** @class */ (function () {
        function CustomImageEvent(name, imageIndex) {
            this.name = name;
            this.imageIndex = imageIndex;
        }
        return CustomImageEvent;
    }());

    var DEFAULT_CONFIG = {
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
    var AngularImageViewerComponent = /** @class */ (function () {
        function AngularImageViewerComponent(moduleConfig, sanitizer) {
            this.moduleConfig = moduleConfig;
            this.sanitizer = sanitizer;
            this.index = 0;
            this.indexChange = new core.EventEmitter();
            this.configChange = new core.EventEmitter();
            this.customImageEvent = new core.EventEmitter();
            this.styleHeight = '98vh';
            this.style = { transform: '', msTransform: '', oTransform: '', webkitTransform: '' };
            this.fullscreen = false;
            this.loading = true;
            this.scale = 1;
            this.rotation = 0;
            this.translateX = 0;
            this.translateY = 0;
            this.hovered = false;
        }
        AngularImageViewerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.screenHeightOccupied) {
                this.styleHeight = 'calc(98vh - ' + this.screenHeightOccupied + 'px)';
                // console.log('Style Height:', this.styleHeight);
            }
        };
        AngularImageViewerComponent.prototype.ngOnInit = function () {
            var merged = this.mergeConfig(DEFAULT_CONFIG, this.moduleConfig);
            this.config = this.mergeConfig(merged, this.config);
            this.triggerConfigBinding();
        };
        AngularImageViewerComponent.prototype.nextImage = function (event) {
            if (this.canNavigate(event) && this.index < this.src.length - 1) {
                this.loading = true;
                this.index++;
                this.triggerIndexBinding();
                this.reset();
            }
        };
        AngularImageViewerComponent.prototype.prevImage = function (event) {
            if (this.canNavigate(event) && this.index > 0) {
                this.loading = true;
                this.index--;
                this.triggerIndexBinding();
                this.reset();
            }
        };
        AngularImageViewerComponent.prototype.zoomIn = function () {
            this.scale *= (1 + this.config.zoomFactor);
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.zoomOut = function () {
            if (this.scale > this.config.zoomFactor) {
                this.scale /= (1 + this.config.zoomFactor);
            }
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.scrollZoom = function (evt) {
            if (this.config.wheelZoom) {
                evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
                return false;
            }
        };
        AngularImageViewerComponent.prototype.rotateClockwise = function () {
            this.rotation += 90;
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.rotateCounterClockwise = function () {
            this.rotation -= 90;
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.onLoad = function (url) {
            console.log('Loading Image Done:', url);
            this.loading = false;
        };
        AngularImageViewerComponent.prototype.onLoadStart = function (url) {
            console.log('Loading Image:', url);
            this.loading = true;
        };
        AngularImageViewerComponent.prototype.imageNotFound = function (url) {
            console.log('Image not found Url:', url);
        };
        AngularImageViewerComponent.prototype.onDragOver = function (evt) {
            this.translateX += (evt.clientX - this.prevX);
            this.translateY += (evt.clientY - this.prevY);
            this.prevX = evt.clientX;
            this.prevY = evt.clientY;
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.onDragStart = function (evt) {
            if (evt.dataTransfer && evt.dataTransfer.setDragImage) {
                evt.dataTransfer.setDragImage(evt.target.nextElementSibling, 0, 0);
            }
            this.prevX = evt.clientX;
            this.prevY = evt.clientY;
        };
        AngularImageViewerComponent.prototype.toggleFullscreen = function () {
            this.fullscreen = !this.fullscreen;
            if (!this.fullscreen) {
                this.reset();
            }
        };
        AngularImageViewerComponent.prototype.triggerIndexBinding = function () {
            this.indexChange.emit(this.index);
        };
        AngularImageViewerComponent.prototype.triggerConfigBinding = function () {
            this.configChange.next(this.config);
        };
        AngularImageViewerComponent.prototype.fireCustomEvent = function (name, imageIndex) {
            this.customImageEvent.emit(new CustomImageEvent(name, imageIndex));
        };
        AngularImageViewerComponent.prototype.reset = function () {
            this.scale = 1;
            this.rotation = 0;
            this.translateX = 0;
            this.translateY = 0;
            this.updateStyle();
        };
        AngularImageViewerComponent.prototype.onMouseOver = function () {
            this.hovered = true;
        };
        AngularImageViewerComponent.prototype.onMouseLeave = function () {
            this.hovered = false;
        };
        AngularImageViewerComponent.prototype.canNavigate = function (event) {
            return event == null || (this.config.allowKeyboardNavigation && this.hovered);
        };
        AngularImageViewerComponent.prototype.updateStyle = function () {
            this.style.transform = "translate(" + this.translateX + "px, " + this.translateY + "px) rotate(" + this.rotation + "deg) scale(" + this.scale + ")";
            this.style.msTransform = this.style.transform;
            this.style.webkitTransform = this.style.transform;
            this.style.oTransform = this.style.transform;
        };
        AngularImageViewerComponent.prototype.mergeConfig = function (defaultValues, overrideValues) {
            var result = __assign({}, defaultValues);
            if (overrideValues) {
                result = __assign(__assign({}, defaultValues), overrideValues);
                if (overrideValues.btnIcons) {
                    result.btnIcons = __assign(__assign({}, defaultValues.btnIcons), overrideValues.btnIcons);
                }
            }
            return result;
        };
        AngularImageViewerComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['config',] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        __decorate([
            core.Input()
        ], AngularImageViewerComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], AngularImageViewerComponent.prototype, "screenHeightOccupied", void 0);
        __decorate([
            core.Input()
        ], AngularImageViewerComponent.prototype, "index", void 0);
        __decorate([
            core.Input()
        ], AngularImageViewerComponent.prototype, "config", void 0);
        __decorate([
            core.Output()
        ], AngularImageViewerComponent.prototype, "indexChange", void 0);
        __decorate([
            core.Output()
        ], AngularImageViewerComponent.prototype, "configChange", void 0);
        __decorate([
            core.Output()
        ], AngularImageViewerComponent.prototype, "customImageEvent", void 0);
        __decorate([
            core.HostListener('window:keyup.ArrowRight', ['$event'])
        ], AngularImageViewerComponent.prototype, "nextImage", null);
        __decorate([
            core.HostListener('window:keyup.ArrowLeft', ['$event'])
        ], AngularImageViewerComponent.prototype, "prevImage", null);
        __decorate([
            core.HostListener('mouseover')
        ], AngularImageViewerComponent.prototype, "onMouseOver", null);
        __decorate([
            core.HostListener('mouseleave')
        ], AngularImageViewerComponent.prototype, "onMouseLeave", null);
        AngularImageViewerComponent = __decorate([
            core.Component({
                selector: 'angular-image-viewer',
                template: "<div [appScreenfull]=\"fullscreen\" class=\"img-container\" [style.height]=\"styleHeight\"\n    [style.backgroundColor]=\"config.containerBackgroundColor\" (wheel)=\"scrollZoom($event)\"\n    (dragover)=\"onDragOver($event)\">\n    <img [src]=\"src[index]\" [ngStyle]=\"style\" alt=\"Image not found...\" (dragstart)=\"onDragStart($event)\"\n        (load)=\"onLoad(src[index])\" (error)=\"imageNotFound(src[index])\" (loadstart)=\"onLoadStart(src[index])\" />\n    <!-- Div below will be used to hide the 'ghost' image when dragging -->\n    <div></div>\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n        <div class=\"spinner\"></div>\n    </div>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateCounterClockwise\"\n        (click)=\"rotateCounterClockwise()\">\n        <span [class]=\"config.btnIcons.rotateCounterClockwise\"></span>\n    </button>\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateClockwise\" (click)=\"rotateClockwise()\">\n        <span [class]=\"config.btnIcons.rotateClockwise\"></span>\n    </button>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomOut\" (click)=\"zoomOut()\">\n        <span [class]=\"config.btnIcons.zoomOut\"></span>\n    </button>\n    <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomIn\" (click)=\"zoomIn()\">\n        <span [class]=\"config.btnIcons.zoomIn\"></span>\n    </button>\n\n    <button type=\"button\" [class]=\"config.btnClass\" *ngFor=\"let cBtn of config.customBtns\"\n        (click)=\"fireCustomEvent(cBtn.name, index)\">\n        <span [class]=\"cBtn.icon\"></span>\n    </button>\n\n    <button type=\"button\" id=\"ngx-fs-btn\" [class]=\"config.btnClass\" (click)=\"toggleFullscreen()\"\n        *ngIf=\"config.allowFullscreen\">\n        <span [class]=\"config.btnIcons.fullscreen\"></span>\n    </button>\n\n    <div class=\"nav-button-container\" *ngIf=\"src.length > 1\">\n        <button type=\"button\" [class]=\"config.btnClass\" (click)=\"prevImage($event)\" [disabled]=\"index === 0\">\n            <span [class]=\"config.btnIcons.prev\"></span>\n        </button>\n        <button type=\"button\" [class]=\"config.btnClass\" (click)=\"nextImage($event)\"\n            [disabled]=\"index === src.length - 1\">\n            <span [class]=\"config.btnIcons.next\"></span>\n        </button>\n    </div>\n</div>",
                styles: [".img-container{width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;overflow:hidden}.img-container img{max-width:90%;max-height:95%}.img-container button{z-index:99;position:absolute;right:15px}.img-container button:not(:disabled){cursor:pointer}.img-container>button:nth-of-type(1):not(#ngx-fs-btn){bottom:15px}.img-container>button:nth-of-type(2):not(#ngx-fs-btn){bottom:65px}.img-container>button:nth-of-type(3):not(#ngx-fs-btn){bottom:115px}.img-container>button:nth-of-type(4):not(#ngx-fs-btn){bottom:165px}.img-container>button:nth-of-type(5):not(#ngx-fs-btn){bottom:215px}.img-container>button:nth-of-type(6):not(#ngx-fs-btn){bottom:265px}.img-container>button:nth-of-type(7):not(#ngx-fs-btn){bottom:315px}#ngx-fs-btn{top:15px}button.default{height:40px;width:40px;border:1px solid #555;border-radius:50%;background-color:#fff;opacity:.7;-webkit-transition:opacity .2s;transition:opacity .2s}button.default:hover{opacity:1}button.default:disabled{opacity:.25}.nav-button-container>button{position:relative;right:0;margin:0 10px}.nav-button-container{text-align:center;position:absolute;z-index:98;bottom:10px;left:0;right:0}.spinner-container{position:absolute;left:0;right:0;top:0;bottom:0;width:60px;height:60px;margin:auto;padding:10px;background-color:rgba(0,0,0,.4);border-radius:25%}.spinner{border-width:7px;border-style:solid;border-color:#ccc #ccc #222;border-radius:50%;height:100%;width:100%;box-sizing:border-box;-webkit-animation:2s linear infinite rotation;animation:2s linear infinite rotation}@keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(359deg)}}@-webkit-keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(359deg)}}"]
            }),
            __param(0, core.Optional()), __param(0, core.Inject('config'))
        ], AngularImageViewerComponent);
        return AngularImageViewerComponent;
    }());

    // import * as screenfull from 'screenfull';
    var FullScreenDirective = /** @class */ (function () {
        function FullScreenDirective(el) {
            this.el = el;
        }
        FullScreenDirective.prototype.ngOnChanges = function (changes) {
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
                    var element = this.el.nativeElement;
                    // tslint:disable-next-line: max-line-length
                    var requestMethod = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
                    if (requestMethod) { // Native full screen.
                        requestMethod.call(element);
                    }
                    else {
                        console.log('FullScreen Request Method Not Supported on this browser.');
                    }
                }
                else {
                    var element = document;
                    // tslint:disable-next-line: max-line-length
                    var requestMethod = element.cancelFullscreen || element.webkitExitFullscreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullScreen;
                    if (requestMethod) { // Native Cancel full screen.
                        requestMethod.call(element);
                    }
                    else {
                        console.log('FullScreen Cancel Request Method Not Supported on this browser.');
                    }
                }
            }
        };
        FullScreenDirective.prototype.ngOnInit = function () {
        };
        FullScreenDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('appScreenfull')
        ], FullScreenDirective.prototype, "fullscreenState", void 0);
        FullScreenDirective = __decorate([
            core.Directive({
                selector: '[appScreenfull]'
            })
        ], FullScreenDirective);
        return FullScreenDirective;
    }());

    // import { ImageViewerConfig } from 'dist/angular-image-viewer/public-api';
    var AngularImageViewerModule = /** @class */ (function () {
        function AngularImageViewerModule() {
        }
        AngularImageViewerModule = __decorate([
            core.NgModule({
                declarations: [AngularImageViewerComponent, FullScreenDirective],
                imports: [
                    common.CommonModule,
                ],
                exports: [AngularImageViewerComponent, FullScreenDirective]
            })
        ], AngularImageViewerModule);
        return AngularImageViewerModule;
    }());

    exports.AngularImageViewerComponent = AngularImageViewerComponent;
    exports.AngularImageViewerModule = AngularImageViewerModule;
    exports.CustomImageEvent = CustomImageEvent;
    exports.FullScreenDirective = FullScreenDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-x-image-viewer.umd.js.map
