import { PersonComponent } from './person/person.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { Side2Component } from './side2/side2.component';
import { Side1Component } from './side1/side1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Side5Component } from './side5/side5.component';

const routes: Routes = [
  {path:'side1', component: Side1Component},
  {path:'side2', component: Side2Component},
  {path:'side5', component: Side5Component},
  {path:'author', component: AuthorComponent},
  {path:'book', component: BookComponent},
  {path:'person', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
