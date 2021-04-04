import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from 'src/app/dialog/modal.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    user: User = new User();   // changing user
    users: User[];                // arr Users

    // to change templates
    tableMode: boolean = true;   
    // count checkbox
    countUCheck: number = 0;
    countLCheck: number = 0;
    total: number = 0;

    constructor(private userService: UserService,
        public matDialog: MatDialog
    ) { }

    ngOnInit() {
        this.loadUsers();   
    }

    // get all users
    loadUsers() {
        this.userService.getUsers()
            .subscribe((user: User[]) => this.users = user);
    }

    // save data to DB on click checkbox
    changeSelection(u:User) {
        this.user = u;
        this.save();
    }

    // save or update data
    save() {
        if (this.user.id == null) {
            this.userService.createUser(this.user)
                .subscribe((user: User) => this.users.push(user));
        } else {
            this.userService.updateUser(this.user)
                .subscribe(user => this.loadUsers());
        }
        this.cancel();
    }

    // edit user
    editUser(u: User) {
        this.user = u;
    }

    // change template and cancel operation
    cancel() {
        this.user = new User();
        this.tableMode = true;
    }

    // delete user
    delete(u: User) {
        this.userService.deleteUser(u.id)
            .subscribe(user => this.loadUsers());
    }

    // add user
    add() {
        this.cancel();
        this.tableMode = false;
    }

    // open mat-dialog and count checkboxes
    openDialog(): void {
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
}
