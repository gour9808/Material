import { Component, OnInit, ViewChild } from '@angular/core';
import { MineLogsService } from '../../services/mine-logs.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  displayedColumns: string[] = ['Action', 'User', 'expiration', 'debug'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private mine: MineLogsService) { }

  ngOnInit() {
    this.fetchTraceLogs();
  }

  fetchTraceLogs() {
    this.mine.fetchFlags().subscribe(res => {
      console.log("Trace flag data", res);
      this.dataSource = res.records;

    })
  }

  deleteTraceLogs(event) {
    console.log(event);
    this.mine.deleteParticularTracelag(event.Id).subscribe(res => {
      console.log(res);
      this.fetchTraceLogs();
    })
  }


}
