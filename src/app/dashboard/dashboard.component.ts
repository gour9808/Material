import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabs = [
    { label: 'All', path: 'allLogs'  },
    { label: 'Mine', path: 'logs'  },
    { label: '', path: 'flag' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
