import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-my-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class MyModalComponent {

    constructor(
        public dialogRef: MatDialogRef<MyModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

        closeModal() {
        this.dialogRef.close();
    }

}