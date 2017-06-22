import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CodeMirrorModalComponent, CodeMirrorModalService} from "./codemirror-modal.service";
import {CodeMirrorComponent} from "./codemirror.component";
import {CodeMirrorExpandComponent} from "./codemirror-expand.component";


@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        CodeMirrorModalComponent,
        CodeMirrorComponent,
        CodeMirrorExpandComponent
    ],
    exports: [
        CodeMirrorComponent,
        CodeMirrorExpandComponent,
    ],
    providers: [
        CodeMirrorModalService
    ],
    entryComponents: [
        CodeMirrorModalComponent
    ]
})
export class CodeMirrorModule {
}
