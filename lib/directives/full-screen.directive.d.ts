import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FullScreenDirective implements OnChanges, OnInit {
    private el;
    fullscreenState: boolean;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullScreenDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullScreenDirective, "[appScreenfull]", never, { "fullscreenState": { "alias": "appScreenfull"; "required": false; }; }, {}, never, never, false, never>;
}
