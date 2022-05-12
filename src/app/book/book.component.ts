import { BookService } from './../_services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../_models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookList:Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {

    this.readAllBooks();
  }

  readAllBooks(){
    this.bookService.readAllBooks()
    .subscribe(data => {
      console.log(data);
      this.bookList = data;

    })
  }

  readBookById(){

  }

  createBook(){
    this.bookService.createBook()
    .subscribe(data => {
      console.log(data);
      this.readAllBooks();

    })
  }

}
