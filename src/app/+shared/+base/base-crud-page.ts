import { BaseService } from "./base-service";
import { Thing } from "./base-thing";

export class BaseCrudPage<T extends Thing> {
      save() {
    if (this.state == 'add') {
      this.setService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.setService.edit(this.item);
    }
    else if (this.state == 'remove') {
      this.setService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
//   ngOnInit(): void {
//     this.dataRefresh();
//   }
  data: T[] = [];
  item!: T ; 
  
  setService!: BaseService<T>;
  state: string = 'list';
  dataRefresh() {
    this.data = this.setService.list();
  }
  add() {
    this.state = 'add';
    this.addPrepair();
  }
  addPrepair(){

  }
  edit(book: T) {
    this.item = { ...book };
    this.state = 'edit';
  }
   remove(book:T){
    this.item = { ...book };
    this.state = 'remove';
   }

  cansel() {
    this.state = 'list';
  }
}
