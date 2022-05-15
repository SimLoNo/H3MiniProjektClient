import { BookService } from './../_services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../_models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book:Book = {bookId:0,title:"",pages:0,wordCound:0,binding:false,releaseYear:0};
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

  readBookById(){ //id:number
    this.bookService.readBookById(1)
    .subscribe(data => {
      console.log("Read book by id: ${id}: " + data.bookId + " " + data.title + " " + data.releaseYear);
      this.book = data;
    })
  }

  createBook(){
    this.bookService.createBook()
    .subscribe(data => {
      console.log(data);
      this.readAllBooks();

    })
  }

}
