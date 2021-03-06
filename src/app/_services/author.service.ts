import { Author } from './../_models/author';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  baseUrl:string = "https://localhost:44331/api/Author";

  constructor(private http:HttpClient) {}

  createAuthor(newAuthor:Author):Observable<Author>{
    return this.http.post<Author>(this.baseUrl, newAuthor, this.httpOptions);
  }
  readAllAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.baseUrl)

  }
  readAuthorById(id:number):Observable<Author>{
    return this.http.get<Author>(`${this.baseUrl}/${id}`);
  }
  readAuthorByName(){}
  readAuthorByBook(){}
  updateAuthor(author:Author):Observable<Author>{
    return this.http.put<Author>(`${this.baseUrl}/${author.authorId}`, author, this.httpOptions);
  }
  deleteAuthor(id:number):Observable<Author>{
    return this.http.delete<Author>(`${this.baseUrl}/${id}`);
  }

  hansOgGrethe():string{
    return "John";
  }
}
