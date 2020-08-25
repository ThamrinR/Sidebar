import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminPelangganComponent } from './admin-pelanggan/admin-pelanggan.component';
import { AdminPackageComponent } from './admin-package/admin-package.component';
import { AdminKomoditasComponent } from './admin-komoditas/admin-komoditas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    AdminUserComponent,
    AdminPelangganComponent,
    AdminPackageComponent,
    AdminKomoditasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
