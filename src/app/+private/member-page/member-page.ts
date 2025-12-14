import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-page',
  imports: [FormsModule],
  templateUrl: './member-page.html',
  styleUrl: './member-page.scss',
})
export class MemberPage {
  memberService: any;
save() {
 this.memberService.add(this.item)
 this.dataRefresh();
 this.state='list';
}
  ngOnInit(): void {
    this.dataRefresh();
  }
  data:memberItem[]=[];
  item:memberItem={
    name:'',
    lastname:'',
    phone:0,
    membershipdate:0,
  };
  memberService=inject(this.memberService);
  state:string='list';
  dataRefresh(){
    this.data=this.memberService.list();
  }
  add() {
    this.state='add';
   
  }
  cansel(){
    this.state='list';
  }
}
export interface memberItem {
  neme: string;
  lastname: string;
  phone: number;
  membershipdate: number;

} 


