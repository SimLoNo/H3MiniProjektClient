import { AuthorService } from './../_services/author.service';
import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  title = 'My title';
  author:Author={authorId:0,name:"",age:0,isAlive:false,password:""};
  authorList: Author[] = []
  constructor(private authorService: AuthorService) {
    // this.authorList = [
    //   {authorId:1,name:"Ken Follet"},
    //   {authorId:2,name:"Dianna Gabaldon"}
    // ];
    this.authorList.forEach(element => {
      //console.log(element);
    });
   }

  ngOnInit(): void {
    // console.log(this.authorService.hansOgGrethe());
    // this.authorList = this.authorService.readAllAuthors();
    // console.log(this.authorList);
    // let author:Author = this.authorService.readAuthorById(1);
    // console.log("readById med korrekt id: "+author.authorId+", "+author.name);
    // author = this.authorService.readAuthorById(2);
    // console.log("readById med forkert id: "+author.authorId+", "+author.name);
    this.readAllAuthors();


  }
  readAllAuthors(){
    this.authorService.readAllAuthors()
    .subscribe((data) => {
      console.log(data);

      this.authorList = data;
    }
    );
  }

  readAuthorById(id:number){
    console.log(this.authorService.readAuthorById(id));

  }

  createAuthor(){
    this.authorService.createAuthor()
    .subscribe(data =>{
      console.log(data);
      this.readAllAuthors();

    });


  }

}
