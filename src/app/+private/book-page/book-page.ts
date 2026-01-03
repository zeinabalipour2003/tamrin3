import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-book-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage extends BaseCrudPage<BookItem> implements OnInit {

  ngOnInit(): void {
    this.item = {
      titel: '',
      writer: '',
      publisher: '',
      price: 0
    }
    this.dataRefresh();
  }

  override setService = inject(BooksService);
  override addPrepair(): void {
    this.item = {
      titel: '',
      writer: '',
      publisher: '',
      price: 0
    }
  }
  booksColumns:column[]=[
    {field:'id',titel:'شناسه'},
    {field:'titel',titel:'عنوان'},
    {field:'writer',titel:'نویسنده'},
    {field:'publisher',titel:'ناشر'},
    {field:'price',titel:'قیمت'}
  ]
}
export interface BookItem extends Thing {
  titel: string;
  writer: string;
  publisher: string;
  price: number;
}

