import { environment } from './../environments/environment';
import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';
  constructor(private adalService: AdalService) {
    adalService.init(environment.authConfig);
  }
  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.adalService.handleWindowCallback();
  }
}