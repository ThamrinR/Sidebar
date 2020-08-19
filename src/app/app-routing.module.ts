import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminPelangganComponent } from './admin-pelanggan/admin-pelanggan.component';


const routes: Routes = [
  {
    path:"admin",
    component:SidebarComponent,
    children:[
      {
        path:"user",component: AdminUserComponent
      },
      {
        path:"pelanggan",component:AdminPelangganComponent
      }

    ]
  },
  {
    path:"",
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
