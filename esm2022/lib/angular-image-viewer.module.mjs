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
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    BrowserAnimationsModule,
                    AngularImageViewerComponent, FullScreenDirective,
                ],
                exports: [AngularImageViewerComponent, FullScreenDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularImageViewerModule, { imports: [CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AngularImageViewerComponent, FullScreenDirective], exports: [AngularImageViewerComponent, FullScreenDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1pbWFnZS12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1pbWFnZS12aWV3ZXIvc3JjL2xpYi9hbmd1bGFyLWltYWdlLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBQ3pFLDRFQUE0RTtBQWM1RSxNQUFNLE9BQU8sd0JBQXdCO2tGQUF4Qix3QkFBd0I7NERBQXhCLHdCQUF3QjtnRUFSN0IsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsdUJBQXVCOztpRkFLbEIsd0JBQXdCO2NBVnBDLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsdUJBQXVCO29CQUN2QiwyQkFBMkIsRUFBRSxtQkFBbUI7aUJBQ25EO2dCQUNELE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDO2FBQzlEOzt3RkFDWSx3QkFBd0IsY0FSN0IsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLDJCQUEyQixFQUFFLG1CQUFtQixhQUUxQywyQkFBMkIsRUFBRSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQW5ndWxhckltYWdlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLWltYWdlLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVsbFNjcmVlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mdWxsLXNjcmVlbi5kaXJlY3RpdmUnO1xuLy8gaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb25maWcgfSBmcm9tICdkaXN0L2FuZ3VsYXItaW1hZ2Utdmlld2VyL3B1YmxpYy1hcGknO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBBbmd1bGFySW1hZ2VWaWV3ZXJDb21wb25lbnQsIEZ1bGxTY3JlZW5EaXJlY3RpdmUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbQW5ndWxhckltYWdlVmlld2VyQ29tcG9uZW50LCBGdWxsU2NyZWVuRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFySW1hZ2VWaWV3ZXJNb2R1bGUge1xuICAvKipcbiAgICogZm9yUm9vdFxuICAgKiBAcmV0dXJucyBBIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlciBkZXBlbmRlbmNpZXNcbiAgICovXG4gIC8vIHN0YXRpYyBmb3JSb290KGltYWdlVmlld2VyQ29uZmlnOiBJbWFnZVZpZXdlckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBuZ01vZHVsZTogQW5ndWxhckltYWdlVmlld2VyTW9kdWxlLFxuICAvLyAgICAgcHJvdmlkZXJzOiBbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICBwcm92aWRlOiBpbWFnZVZpZXdlckNvbmZpZyxcbiAgLy8gICAgICAgICB1c2VWYWx1ZTogaW1hZ2VWaWV3ZXJDb25maWdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXVxuICAvLyAgIH07XG4gIC8vIH1cbn1cbiJdfQ==