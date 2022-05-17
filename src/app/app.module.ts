import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Side1Component } from './side1/side1.component';
import { Side2Component } from './side2/side2.component';
import { Side5Component } from './side5/side5.component';
import { AuthorComponent } from './author/author.component';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    Side1Component,
    Side2Component,
    Side5Component,
    AuthorComponent,
    BookComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
