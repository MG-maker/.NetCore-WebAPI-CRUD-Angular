var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { MyModalComponent } from 'src/app/dialog/modal.component';
let AppComponent = class AppComponent {
    constructor(userService, matDialog) {
        this.userService = userService;
        this.matDialog = matDialog;
        this.user = new User(); // changing user
        // to change templates
        this.tableMode = true;
        // count checkbox
        this.countUCheck = 0;
        this.countLCheck = 0;
        this.total = 0;
    }
    ngOnInit() {
        this.loadUsers();
    }
    // get all users
    loadUsers() {
        this.userService.getUsers()
            .subscribe((user) => this.users = user);
    }
    // save data to DB on click checkbox
    changeSelection(u) {
        this.user = u;
        this.save();
    }
    // save or update data
    save() {
        if (this.user.id == null) {
            this.userService.createUser(this.user)
                .subscribe((user) => this.users.push(user));
        }
        else {
            this.userService.updateUser(this.user)
                .subscribe(user => this.loadUsers());
        }
        this.cancel();
    }
    // edit user
    editUser(u) {
        this.user = u;
    }
    // change template and cancel operation
    cancel() {
        this.user = new User();
        this.tableMode = true;
    }
    // delete user
    delete(u) {
        this.userService.deleteUser(u.id)
            .subscribe(user => this.loadUsers());
    }
    // add user
    add() {
        this.cancel();
        this.tableMode = false;
    }
    // open mat-dialog and count checkboxes
    openDialog() {
        this.countUCheck = 0;
        this.countLCheck = 0;
        for (let key in this.users) {
            if (this.users[key].active == true) {
                this.countUCheck++;
            }
            if (this.users[key].active == false) {
                this.countLCheck++;
            }
            this.total = this.countUCheck + this.countLCheck;
        }
        const dialogRef = this.matDialog.open(MyModalComponent, {
            width: '250px',
            data: { U: this.countUCheck, L: this.countLCheck, T: this.total }
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [UserService]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map