import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema-builder',
  templateUrl: './schema-builder.component.html',
  styleUrls: ['./schema-builder.component.css']
})
export class SchemaBuilderComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
    this.getObjects();
  }


  getObjects() {

  }

  getFields() {

  }

  checkValue(event) {
    console.log(event);
  }

}
