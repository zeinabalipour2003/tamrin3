import { Routes } from '@angular/router';
import { Loginpage } from './+public/+pages/loginpage/loginpage';
import { PrivateTemplat } from './+private/private-templat/private-templat';
import { BookPage } from './+private/book-page/book-page';
import { MemberPage } from './+private/member-page/member-page';
import { BorrwsPage } from './+private/borrows-page/borrws-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:Loginpage},
    {path:'private',canActivate:[privateGuard],component:PrivateTemplat,children:[
        {path:'books',component:BookPage},
        {path:'members',component:MemberPage},
        {path:'borrows',component:BorrwsPage},
        {path:'reports',component:ReportsPage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'}

    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
