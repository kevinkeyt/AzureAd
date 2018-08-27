import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { SecureComponent } from './secure.component';
import { LoginComponent } from './login.component';
import { AdalService, AdalGuard } from '../../node_modules/adal-angular4';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: SecureComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [AuthGuard, AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
