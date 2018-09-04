import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  nodeName = localStorage.getItem('nodeName')

  constructor(private router : Router) {
   
   }

  ngOnInit() {
  }

  goToEvent()
  {
    this.router.navigate(['home/events'])

  }

}
