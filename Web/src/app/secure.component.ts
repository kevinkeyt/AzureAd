import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions, Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  items = [];
  constructor(private adalService: AdalService, private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get('/api/values/', this.getAuthHeader()).pipe(tap(res => {
      this.items = res.json();
    })).subscribe();
  }

  getAuthHeader(): RequestOptions {
      if (!this.adalService.userInfo.authenticated) {
          this.router.navigate(['/login']);
      }
      const headers = new Headers({ 'Authorization': 'Bearer ' + this.adalService.userInfo.token });
      return new RequestOptions({ headers: headers });
  }

}
