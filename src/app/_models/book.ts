import { Author } from './author';
export interface Book{
  bookId:number;
  title:string;
  pages:number;
  wordCound:number;
  binding:boolean;
  releaseYear:number;
  authorId:number;
  author?:Author;
}
