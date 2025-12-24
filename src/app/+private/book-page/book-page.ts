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
    if (this.state == 'add') {
      this.bookService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.bookService.edit(this.item);
    }
    else if (this.state == 'remove') {
      this.bookService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BookItem[] = [];
  item: BookItem = {
    id: 0,
    titel: '',
    writer: '',
    publisher: '',
    price: 0
  };
  bookService = inject(BooksService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.bookService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      titel: '',
      writer: '',
      publisher: '',
      price: 0
    };
  }
  edit(book: BookItem) {
    this.item = { ...book };
    this.state = 'edit';
  }
   remove(book:BookItem){
    this.item = { ...book };
    this.state = 'remove';
   }

  cansel() {
    this.state = 'list';
  }
}
export interface BookItem {
  id?: number;
  titel: string;
  writer: string;
  publisher: string;
  price: number;
}

