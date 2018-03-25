import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';

import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { ExtendedComponent } from './extended/extended.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ExtendedComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  entryComponents:[AddEditComponent],
})
export class AppModule { }
