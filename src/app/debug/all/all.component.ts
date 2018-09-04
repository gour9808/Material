import { Component, OnInit, ViewChild } from '@angular/core';
import { MineLogsService } from '../../services/mine-logs.service';
import {  MatTableDataSource } from '@angular/material';
import { saveAs } from 'file-saver';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  userSession = localStorage.getItem('session');
  logUserId = localStorage.getItem('userId')
  instanceUrl = localStorage.getItem('instance-url');
  mineLogs$: any = [];
  recordId: any;
  data: any;

  displayedColumns: string[] = ['Action', 'User', 'Operation', 'Duration', 'logSize', 'StartTime'];
  dataSource = new MatTableDataSource<any>();


  constructor(private mine: MineLogsService, private router: Router, private activate: ActivatedRoute) { }

  ngOnInit() {
    this.getAllLogs();
  }


  getAllLogs() {
    this.mine.getAllLogs().subscribe(res => {
      console.log("res for all logs", res);
      this.dataSource = res.records;

    })
  }

  downloadLogs(event) {
    console.log("log Id is", event);
    this.recordId = event.Id;
    let title = "apex - " + event.Id
    this.mine.downloadLogs(this.recordId).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err.error.text);
      this.data = err.error.text;
      this.saveToFileSystem(this.data)
    })
  }

  saveToFileSystem(response) {
    const filename = "Apex- " + this.recordId;
    const blob = new Blob([response], { type: 'application/octet-stream' });
    saveAs(blob, filename);
  }

  goToNewWindow() {
    chrome.windows.create({
      url: "index.html",
      type: 'panel',
      width: 1200,
      height: 800,
    },
      () => {
      });
  }

  goToViewPage(event) {
    console.log("on row select", event);
    this.router.navigate(['../details', event.Id], { relativeTo: this.activate });
  }

}
