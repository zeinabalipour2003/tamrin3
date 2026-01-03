import { Injectable } from '@angular/core';
import { BookItem } from './book-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, titel: 'تصمیم گرفتم خودم باشم', writer: 'کیم سوهیون', publisher: 'آراستگان', price: 208000 },
    { id: 2, titel: ' تکه هایی از یک کل منسجم', writer: 'پونه مقیمی', publisher: 'بینش نو', price: 342000 },
    { id: 3, titel: 'غرور و تعصب', writer: 'جین آستن', publisher: 'فانوس', price: 280000 },
    { id: 4, titel: 'قورباغه ات را قورت بده', writer: 'برایان ترسی', publisher: 'فانوس', price: 200000 },
  ];
  override update(destination: BookItem, source: BookItem): void {

    destination.titel = source.titel;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;

  }
}


