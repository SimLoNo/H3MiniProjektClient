import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side1',
  templateUrl: './side1.component.html',
  styleUrls: ['./side1.component.scss']
})
export class Side1Component implements OnInit {
  authorId:number = 1;
  name:string ="Bo";
  age:number = 50;
  isAlive:boolean = false;
  password:string = "";
 // author:Author = {authorId:0,name:"",age:0,isAlive:false,password:""};


  constructor() { }

  ngOnInit(): void {
  }

  myMethod(){
    console.log("myMethod virker!");
  }

  myMethod2(variabelnavn:string){
    console.log("myMethod " + variabelnavn + " " + this.name);
  }
  myMethod3(nameVar:string){
    console.log("myMethod3, name: " +nameVar);

  }

}
