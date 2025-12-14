import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  router=inject(Router);
  message:string='';
  loginForm:loginForm={
    username:'',
    password:'',
    keepMe:false,
  };
  check(){
    if(this.loginForm.username=='zizi' && this.loginForm.password=='8282'){
      sessionStorage.setItem('auth-token','abcdefg');
      if (this.loginForm.keepMe==true){
        localStorage.setItem('autk-token','abcdefg')
      }
      this.router.navigateByUrl('private');
  }
  else{
     this.message='نام کاربری یا کلمه عبور اشتباه است';
  }
  
}
}

interface loginForm{
  username:string;
  password:string;
  keepMe:boolean;
}
