import { Injectable } from '@angular/core';
import { MemberItem } from './member-page';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private data1: MemberItem[] = [
    { id: 4040427165, name: 'زینب صید علی پور', membershipdate: '1404-09-01', validityperiod: 'یک سال' },
    { id: 4040427152, name: 'زهرامحمدی', membershipdate: '1404-06-01', validityperiod: 'یک سال' },
    { id: 4045427565, name: 'سارا رضایی', membershipdate: '1404-07-01', validityperiod: 'یک سال' },
    { id: 4040425633, name: 'یگانه ناصری', membershipdate: '1404-01-01', validityperiod: 'یک سال' },
  ];
  edit(item: MemberItem) {
    const index = this.data1.findIndex(b => b.id == item.id);
    if (index != -1) {
      this.data1[index].id = item.id;
      this.data1[index].name = item.name;
      this.data1[index].membershipdate = item.membershipdate;
      this.data1[index].validityperiod = item.validityperiod;
    }
  }
  list(){
    return[...this.data1];
  }
  add(item:MemberItem){
    this.data1.push(item);
  }
  remove(item: MemberItem) {
    this.data1 = this.data1.filter(b => b.id != item.id);
  }
}




