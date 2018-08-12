import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
  }

  login() {
    this.adalService.login();
  }
}
