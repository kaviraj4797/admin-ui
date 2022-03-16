// import { MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MdbTablePaginationComponent } from 'angular-bootstrap-md';
// import { MdbTablePaginationComponent } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatButtonModule,MatIconModule,NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
