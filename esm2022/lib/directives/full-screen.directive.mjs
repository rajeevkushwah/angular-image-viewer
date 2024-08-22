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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1zY3JlZW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1pbWFnZS12aWV3ZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2Z1bGwtc2NyZWVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0QsTUFBTSxlQUFlLENBQUM7O0FBQy9GLDRDQUE0QztBQUs1QyxNQUFNLE9BQU8sbUJBQW1CO0lBSVY7SUFGSSxlQUFlLENBQVU7SUFFakQsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDO0lBRXZDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsOEJBQThCO1FBQzlCLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osc0RBQXNEO1FBQ3RELCtDQUErQztRQUMvQyxxQ0FBcUM7UUFDckMsdUJBQXVCO1FBQ3ZCLElBQUk7UUFFSiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFFaEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUUzQyw0Q0FBNEM7Z0JBQzVDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsdUJBQXVCLElBQUksT0FBTyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFFbEosSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtvQkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFDMUUsQ0FBQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixNQUFNLE9BQU8sR0FBUSxRQUFRLENBQUM7Z0JBRTlCLDRDQUE0QztnQkFDNUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxPQUFPLENBQUMsc0JBQXNCLElBQUksT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFNUssSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtvQkFDaEQsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUVBQWlFLENBQUMsQ0FBQztnQkFDakYsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDOzZFQWxEVSxtQkFBbUI7NkRBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjsyQ0FHeUIsZUFBZTtrQkFBdEMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCAqIGFzIHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTY3JlZW5mdWxsXSdcbn0pXG5leHBvcnQgY2xhc3MgRnVsbFNjcmVlbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICBASW5wdXQoJ2FwcFNjcmVlbmZ1bGwnKSBmdWxsc2NyZWVuU3RhdGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKCdmdWxsc2NyZWVuU3RhdGUgaXNGaXJzdENoYW5nZTonLCBjaGFuZ2VzW1wiZnVsbHNjcmVlblN0YXRlXCJdLmlzRmlyc3RDaGFuZ2UoKSk7XG4gICAgY29uc29sZS5sb2coJ2Z1bGxzY3JlZW5TdGF0ZScsIHRoaXMuZnVsbHNjcmVlblN0YXRlKTtcbiAgICAvLyBpZiAoc2NyZWVuZnVsbC5pc0VuYWJsZWQpIHtcbiAgICAvLyAgIHNjcmVlbmZ1bGwudG9nZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLmZ1bGxzY3JlZW5TdGF0ZSAmJiBzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgIC8vICAgc2NyZWVuZnVsbC5yZXF1ZXN0KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gfSBlbHNlIGlmIChzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgIC8vICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgLy8gfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIGlmICghY2hhbmdlc1snZnVsbHNjcmVlblN0YXRlJ10uaXNGaXJzdENoYW5nZSgpKSB7XG5cbiAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW5TdGF0ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4gfHwgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fCBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IGVsZW1lbnQubXNSZXF1ZXN0RnVsbFNjcmVlbjtcblxuICAgICAgICBpZiAocmVxdWVzdE1ldGhvZCkgeyAvLyBOYXRpdmUgZnVsbCBzY3JlZW4uXG4gICAgICAgICAgcmVxdWVzdE1ldGhvZC5jYWxsKGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGdWxsU2NyZWVuIFJlcXVlc3QgTWV0aG9kIE5vdCBTdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBkb2N1bWVudDtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICBjb25zdCByZXF1ZXN0TWV0aG9kID0gZWxlbWVudC5jYW5jZWxGdWxsc2NyZWVuIHx8IGVsZW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4gfHwgZWxlbWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuIHx8IGVsZW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiB8fCBlbGVtZW50Lm1zRXhpdEZ1bGxTY3JlZW47XG5cbiAgICAgICAgaWYgKHJlcXVlc3RNZXRob2QpIHsgLy8gTmF0aXZlIENhbmNlbCBmdWxsIHNjcmVlbi5cbiAgICAgICAgICByZXF1ZXN0TWV0aG9kLmNhbGwoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Z1bGxTY3JlZW4gQ2FuY2VsIFJlcXVlc3QgTWV0aG9kIE5vdCBTdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiJdfQ==