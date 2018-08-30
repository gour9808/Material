import { Component, OnInit, ViewChild } from '@angular/core';
import { MineLogsService } from '../../services/mine-logs.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { saveAs } from 'file-saver';



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
  data : any;

  displayedColumns: string[] = ['Action', 'User', 'Operation', 'Duration', 'logSize', 'StartTime'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mine: MineLogsService) { }

  ngOnInit() {
    this.getAllLogs();
    this.dataSource.paginator = this.paginator;
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

}
