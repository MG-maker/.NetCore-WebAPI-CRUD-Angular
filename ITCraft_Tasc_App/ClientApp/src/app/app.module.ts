import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Popup
import { MyModalComponent } from 'src/app/dialog/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

//Checkbox
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        BrowserModule,
         FormsModule,
          HttpClientModule, 
          MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        BrowserAnimationsModule
    
    ],
    declarations: [AppComponent, MyModalComponent],
    entryComponents: [MyModalComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }