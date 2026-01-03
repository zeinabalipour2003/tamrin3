import { Component, inject, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { MemberService } from './member-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-member-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './member-page.html',
  styleUrl: './member-page.scss',
})
export class MemberPage extends BaseCrudPage<MemberItem> implements OnInit{
  ngOnInit(): void {
    this.item={
        name:'',
        membershipdate:'',
        validityperiod:''
      }
   this.dataRefresh();
  }
    override setService=inject(MemberService);
    override addPrepair(): void {
      this.item={
        name:'',
        membershipdate:'',
        validityperiod:''
      }
    }
    memberColumns:column[]=[
      {field:'id',titel:'کد ملی'},
      {field:'name',titel:'نام و نام خانوادگی'},
      {field:'membershipdate',titel:'تاریخ عضویت'},
      {field:'validityperiod',titel:'مدت اعتبار'},
    ]
}
export interface MemberItem extends Thing {
  name: string;
  membershipdate: string;
  validityperiod: string;
}


