var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
/**
 * @title Basic checkboxes
 */
let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this.item1 = { isChecked: true, value: 10 };
        this.item2 = { isChecked: true, value: 20 };
        this.items = [
            { isChecked: true, value: 10 },
            { isChecked: false, value: 20 },
            { isChecked: true, value: 20 },
            { isChecked: false, value: 20 },
            { isChecked: true, value: 20 },
            { isChecked: true, value: 20 },
        ];
    }
    get total() {
        return (this.item1.isChecked ? this.item1.value : 0) +
            (this.item2.isChecked ? this.item2.value : 0);
    }
    get sumTotal() {
        return this.items.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0);
    }
};
CheckboxComponent = __decorate([
    Component({
        selector: 'checkbox-comp',
        templateUrl: 'checkbox-view.html',
        styleUrls: ['checkbox-view.css'],
    })
], CheckboxComponent);
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map