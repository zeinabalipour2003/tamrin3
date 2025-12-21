import { Component, inject, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { MemberService } from './member-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-page',
  imports: [FormsModule],
  templateUrl: './member-page.html',
  styleUrl: './member-page.scss',
})
export class MemberPage implements OnInit {
save() {
 this.MemberService.add(this.item);
  this.dataRefresh();
  this.state='list';

}
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  item:MemberItem={
    id:0,
    name:'',
    membershipdate:'',
    validityperiod:'', 
  };
  
  MemberService=inject(MemberService);
  state:string='list';
  dataRefresh(){
    this.data=this.MemberService.list();
  }
  add() {
    this.state='add';
  }
cansel(){
  this.state='list';
}
}
export interface MemberItem {
  id: number;
  name: string;
  membershipdate: string;
  validityperiod: string;
}
