var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Input, Component } from '@angular/core';
let SecondComponent = class SecondComponent {
};
__decorate([
    Input()
], SecondComponent.prototype, "U", void 0);
__decorate([
    Input()
], SecondComponent.prototype, "L", void 0);
__decorate([
    Input()
], SecondComponent.prototype, "T", void 0);
SecondComponent = __decorate([
    Component({
        selector: 'child-comp',
        templateUrl: './second.component.html',
        styleUrls: ['./second.component.css']
    })
], SecondComponent);
export { SecondComponent };
//# sourceMappingURL=second.component.js.map