import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-page',
  imports: [FormsModule],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage implements OnInit {
save() {
 this.bookService.add(this.item)
 this.dataRefresh();
 this.state='list';
}
  ngOnInit(): void {
    this.dataRefresh();
  }
  data:BookItem[]=[];
  item:BookItem={
    id:0,
    titel:'',
    writer:'',
    publisher:'',
    price:0 
  };
  bookService=inject(BooksService);
  state:string='list';
  dataRefresh(){
    this.data=this.bookService.list();
  }
  add() {
    this.state='add';
   
  }
  cansel(){
    this.state='list';
  }
}
export interface BookItem {
  id: number;
  titel: string;
  writer: string;
  publisher: string;
  price: number;
} 
