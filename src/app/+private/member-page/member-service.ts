import { Injectable } from '@angular/core';
import { MemberItem } from './member-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<MemberItem> {
  override data: MemberItem[] = [
    { id: 4040427165, name: 'زینب صید علی پور', membershipdate: '1404-09-01', validityperiod: 'یک سال' },
    { id: 4040427152, name: 'زهرامحمدی', membershipdate: '1404-06-01', validityperiod: 'یک سال' },
    { id: 4045427565, name: 'سارا رضایی', membershipdate: '1404-07-01', validityperiod: 'یک سال' },
    { id: 4040425633, name: 'یگانه ناصری', membershipdate: '1404-01-01', validityperiod: 'یک سال' },
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.name=source.name;
    destination.membershipdate=source.membershipdate;
    destination.validityperiod=source.validityperiod;
  }
 }





