import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.css']
})
export class DataLoaderComponent implements OnInit {

  userSession = localStorage.getItem('session');

  constructor(private router : Router) { }

  ngOnInit() {
    console.log("init data loader");
    this.fetchSession();
  }


  fetchSession() {
    console.log('go to route');
    if (this.userSession) {
      this.router.navigate(['/home'])
    }
    else {
      this.router.navigate(['/auth'])
    }
  }
}
