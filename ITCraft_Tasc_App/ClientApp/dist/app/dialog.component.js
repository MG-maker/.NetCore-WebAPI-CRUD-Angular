var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
/**
 * @title Dialog elements
 */
let DialogElementsExample = class DialogElementsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
};
DialogElementsExample = __decorate([
    Component({
        selector: 'dialog-comp',
        templateUrl: 'dialog-elements.html',
    })
], DialogElementsExample);
export { DialogElementsExample };
let DialogElementsExampleDialog = class DialogElementsExampleDialog {
};
DialogElementsExampleDialog = __decorate([
    Component({
        selector: 'dialog-elements-example-dialog',
        templateUrl: 'dialog-elements-example-dialog.html',
    })
], DialogElementsExampleDialog);
export { DialogElementsExampleDialog };
//# sourceMappingURL=dialog.component.js.map