import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularImageViewerComponent } from './angular-image-viewer.component';
import { FullScreenDirective } from './directives/full-screen.directive';
import * as i0 from "@angular/core";
// import { ImageViewerConfig } from 'dist/angular-image-viewer/public-api';
export class AngularImageViewerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1pbWFnZS12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1pbWFnZS12aWV3ZXIvc3JjL2xpYi9hbmd1bGFyLWltYWdlLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBQ3pFLDRFQUE0RTtBQWM1RSxNQUFNLE9BQU8sd0JBQXdCO2tGQUF4Qix3QkFBd0I7NERBQXhCLHdCQUF3QjtnRUFQakMsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsdUJBQXVCOztpRkFJZCx3QkFBd0I7Y0FWcEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDO2dCQUNoRSxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxtQkFBbUIsQ0FBQzthQUM1RDs7d0ZBQ1ksd0JBQXdCLG1CQVRwQiwyQkFBMkIsRUFBRSxtQkFBbUIsYUFFN0QsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsdUJBQXVCLGFBRWYsMkJBQTJCLEVBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFuZ3VsYXJJbWFnZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1pbWFnZS12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bGxTY3JlZW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZnVsbC1zY3JlZW4uZGlyZWN0aXZlJztcbi8vIGltcG9ydCB7IEltYWdlVmlld2VyQ29uZmlnIH0gZnJvbSAnZGlzdC9hbmd1bGFyLWltYWdlLXZpZXdlci9wdWJsaWMtYXBpJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJJbWFnZVZpZXdlckNvbXBvbmVudCwgRnVsbFNjcmVlbkRpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJJbWFnZVZpZXdlckNvbXBvbmVudCwgRnVsbFNjcmVlbkRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckltYWdlVmlld2VyTW9kdWxlIHtcbiAgLyoqXG4gICAqIGZvclJvb3RcbiAgICogQHJldHVybnMgQSBtb2R1bGUgd2l0aCBpdHMgcHJvdmlkZXIgZGVwZW5kZW5jaWVzXG4gICAqL1xuICAvLyBzdGF0aWMgZm9yUm9vdChpbWFnZVZpZXdlckNvbmZpZzogSW1hZ2VWaWV3ZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgbmdNb2R1bGU6IEFuZ3VsYXJJbWFnZVZpZXdlck1vZHVsZSxcbiAgLy8gICAgIHByb3ZpZGVyczogW1xuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgcHJvdmlkZTogaW1hZ2VWaWV3ZXJDb25maWcsXG4gIC8vICAgICAgICAgdXNlVmFsdWU6IGltYWdlVmlld2VyQ29uZmlnXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIF1cbiAgLy8gICB9O1xuICAvLyB9XG59XG4iXX0=