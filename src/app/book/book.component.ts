import { Book } from './../_models/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from './../_services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookForm = new FormGroup({
    bookId: new FormControl(0),
    title: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    wordCound: new FormControl('', Validators.required),
    binding: new FormControl(false, Validators.required),
    releaseYear: new FormControl('', Validators.required),
    authorId: new FormControl('', Validators.required)
  })
  book:Book = {bookId:0,title:"",pages:0,wordCound:0,binding:false,releaseYear:0, authorId:0};
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
    this.bookService.createBook(this.bookForm.value)
    .subscribe(data => {
      console.log(data);
      this.readAllBooks();

    })
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id)
    .subscribe(data =>{
      console.log(data);
      this.bookList = this.bookList.filter(author => author.authorId != id);
    })

  }

  sendBook(){
    let book:Book = this.bookForm.value;
    if (book.bookId == 0 || book.bookId == undefined) {
      book.authorId = 0;
      this.bookService.createBook(book)
      .subscribe(data => {
        console.log(data);
        this.bookList.push(data);

      })
    }
    else {
      this.bookService.updateBook(book.bookId,book)
      .subscribe(data => {
        console.log(data);
        let bookIndex:number = this.bookList.findIndex(bookitem => bookitem.bookId == data.bookId)
        this.bookList[bookIndex] = data;
      })

    }
  }


  cancel(){
    let book:Book = {bookId:0, title:'', wordCound:0, binding:false, releaseYear:0, pages:0, authorId:0};
    this.bookForm.setValue(this.book);
    console.log(this.bookForm.value);
  }
}
