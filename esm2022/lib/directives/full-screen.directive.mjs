import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
// import * as screenfull from 'screenfull';
export class FullScreenDirective {
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
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullScreenDirective, selectors: [["", "appScreenfull", ""]], inputs: { fullscreenState: [i0.ɵɵInputFlags.None, "appScreenfull", "fullscreenState"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullScreenDirective, [{
        type: Directive,
        args: [{
                selector: '[appScreenfull]',
                standalone: true
            }]
    }], () => [{ type: i0.ElementRef }], { fullscreenState: [{
            type: Input,
            args: ['appScreenfull']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1zY3JlZW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1pbWFnZS12aWV3ZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2Z1bGwtc2NyZWVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0QsTUFBTSxlQUFlLENBQUM7O0FBQy9GLDRDQUE0QztBQU01QyxNQUFNLE9BQU8sbUJBQW1CO0lBSVY7SUFGSSxlQUFlLENBQVU7SUFFakQsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDO0lBRXZDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsOEJBQThCO1FBQzlCLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELCtDQUErQztRQUMvQyxxQ0FBcUM7UUFDckMsdUJBQXVCO1FBQ3ZCLElBQUk7UUFFSiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFFaEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUUzQyw0Q0FBNEM7Z0JBQzVDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsdUJBQXVCLElBQUksT0FBTyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFFbEosSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtvQkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFDMUUsQ0FBQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixNQUFNLE9BQU8sR0FBUSxRQUFRLENBQUM7Z0JBRTlCLDRDQUE0QztnQkFDNUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxPQUFPLENBQUMsc0JBQXNCLElBQUksT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFNUssSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtvQkFDaEQsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUVBQWlFLENBQUMsQ0FBQztnQkFDakYsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDOzZFQWxEVSxtQkFBbUI7NkRBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsVUFBVSxFQUFFLElBQUk7YUFDbkI7MkNBR3lCLGVBQWU7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBzY3JlZW5mdWxsIGZyb20gJ3NjcmVlbmZ1bGwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBTY3JlZW5mdWxsXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gIEBJbnB1dCgnYXBwU2NyZWVuZnVsbCcpIGZ1bGxzY3JlZW5TdGF0ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coJ2Z1bGxzY3JlZW5TdGF0ZSBpc0ZpcnN0Q2hhbmdlOicsIGNoYW5nZXNbXCJmdWxsc2NyZWVuU3RhdGVcIl0uaXNGaXJzdENoYW5nZSgpKTtcbiAgICBjb25zb2xlLmxvZygnZnVsbHNjcmVlblN0YXRlJywgdGhpcy5mdWxsc2NyZWVuU3RhdGUpO1xuICAgIC8vIGlmIChzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgIC8vICAgc2NyZWVuZnVsbC50b2dnbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuZnVsbHNjcmVlblN0YXRlICYmIHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgLy8gICBzY3JlZW5mdWxsLnJlcXVlc3QodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyB9IGVsc2UgaWYgKHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgLy8gICBzY3JlZW5mdWxsLmV4aXQoKTtcbiAgICAvLyB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKCFjaGFuZ2VzWydmdWxsc2NyZWVuU3RhdGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcblxuICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlblN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICBjb25zdCByZXF1ZXN0TWV0aG9kID0gZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbiB8fCBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8IGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHwgZWxlbWVudC5tc1JlcXVlc3RGdWxsU2NyZWVuO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0TWV0aG9kKSB7IC8vIE5hdGl2ZSBmdWxsIHNjcmVlbi5cbiAgICAgICAgICByZXF1ZXN0TWV0aG9kLmNhbGwoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Z1bGxTY3JlZW4gUmVxdWVzdCBNZXRob2QgTm90IFN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXRob2QgPSBlbGVtZW50LmNhbmNlbEZ1bGxzY3JlZW4gfHwgZWxlbWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiB8fCBlbGVtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4gfHwgZWxlbWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuIHx8IGVsZW1lbnQubXNFeGl0RnVsbFNjcmVlbjtcblxuICAgICAgICBpZiAocmVxdWVzdE1ldGhvZCkgeyAvLyBOYXRpdmUgQ2FuY2VsIGZ1bGwgc2NyZWVuLlxuICAgICAgICAgIHJlcXVlc3RNZXRob2QuY2FsbChlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRnVsbFNjcmVlbiBDYW5jZWwgUmVxdWVzdCBNZXRob2QgTm90IFN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19