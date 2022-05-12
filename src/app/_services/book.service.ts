import { Book } from './../_models/book';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  baseUrl:string = "https://localhost:44331/api/Book";
  constructor(private http:HttpClient) { }

  createBook():Observable<Book>{
    let book:Book = {bookId:0,title:"Pillars of the Earth",pages:1000,wordCound:40000,binding:true,releaseYear:1990};
    return this.http.post<Book>(this.baseUrl, book, this.httpOptions);
  }
  readAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }
  readBookById():Observable<Book>{
    let id:number = 1;
    return this.http.get<Book>('${this.baseUrl}/${id}');
  }
  updateBook(){}
  deleteBook(){}

}