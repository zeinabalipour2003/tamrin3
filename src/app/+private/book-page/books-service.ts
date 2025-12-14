import { Injectable } from '@angular/core';
import { BookItem } from './book-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, titel: 'تصمیم گرفتم خودم باشم', writer: 'کیم سوهیون', publisher: 'آراستگان', price: 208000 },
    { id: 2, titel: ' تکه هایی از یک کل منسجم', writer: 'پونه مقیمی', publisher: 'بینش نو', price: 342000 },
    { id: 3, titel: 'غرور و تعصب', writer: 'جین آستن', publisher: 'فانوس', price: 280000 },
    { id: 4, titel: 'قورباغه ات را قورت بده', writer: 'برایان ترسی', publisher: 'فانوس', price: 200000 },
  ];
  list(){
    return [...this.data];
  }
  add(item:BookItem){
    this.data.push(item);
  }
}
