import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  @Input() active: boolean;
  @Input() navLinks : any

  constructor() { }

  ngOnInit() {
  }

}
