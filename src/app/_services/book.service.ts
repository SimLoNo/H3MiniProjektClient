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

  createBook(newBook:Book):Observable<Book>{
    return this.http.post<Book>(this.baseUrl, newBook, this.httpOptions);
  }
  readAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }
  readBookById(id:number):Observable<Book>{
    return this.http.get<Book>(this.baseUrl + "/" + id); //'${this.baseUrl}/${id}'
  }
  updateBook(id:number, book:Book):Observable<Book>{
    return  this.http.put<Book>(`${this.baseUrl}/${id}`, book, this.httpOptions)
  }
  deleteBook(id:number){
    return this.http.delete<Book>(`${this.baseUrl}/${id}`);
  }

}
