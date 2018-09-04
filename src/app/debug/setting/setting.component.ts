import { Component, OnInit } from '@angular/core';
import { MineLogsService } from '../../services/mine-logs.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ConfirmationService } from 'primeng/api';
import * as  post from '../../model/user';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  displayedColumns: string[] = ['Action', 'User', 'expiration', 'debug'];
  dataSource = new MatTableDataSource<any>();
  dialog: boolean;
  showUserDialog: boolean;
  showClassDialog: boolean;
  showTriggerDialog: boolean;
  filtereUserForUser$: any = [];
  filterUserForClass$: any = [];
  filterUserForTrigger$: any = [];
  filterDebugLevel$: any = [];
  fetchDebugLevel$: any = [];
  deleteConfirmDialog: boolean;
  emptyMessage: string;
  add: post.CreateUser = new post.CreateUser();
  userName: string;
  devName: string;


  configs = [
    { value: 'User', viewValue: 'User' },
    { value: 'Class', viewValue: 'Class' },
    { value: 'Trigger', viewValue: 'Trigger' }
  ];


  constructor(private mine: MineLogsService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.fetchTraceLogs();
  }

  fetchTraceLogs() {
    this.mine.fetchFlags().subscribe(res => {
      console.log("Trace flag data", res);
      this.dataSource = res.records;

    })
  }

  confirm(event) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log("id is", event.Id);
        this.mine.deleteParticularTracelag(event.Id).subscribe(res => {
          console.log(res);
          this.fetchTraceLogs();
        })
      },
      reject: () => {

      }
    });
  }

  checkValue(event) {
    console.log(event);
    if (event.value === "User") {
      this.showUserDialog = true;

    }
    else if (event.value === "Class") {
      this.showClassDialog = true;
    }
    else {
      this.showTriggerDialog = true;

    }

  }

  filterUserDataForUser(event) {
    console.log(event.query);
    this.mine.searchUserForUser(event.query).subscribe(res => {
      console.log(res.records);
      if (res.records.length === 0) {
        this.emptyMessage = "No records found"
      }
      this.filtereUserForUser$ = res.records;
    })
  }

  filterUserDataForClass(event) {
    console.log(event.query);
    this.mine.searchUserForClass(event.query).subscribe(res => {
      console.log(res.records);
      if (res.records.length === 0) {
        this.emptyMessage = "No records found"
      }
      this.filterUserForClass$ = res.records;
    })
  }

  filterUserDataForTrigger(event) {
    console.log(event.query);
    this.mine.searchUserForTrigger(event.query).subscribe(res => {
      console.log(res.records);
      if (res.records.length === 0) {
        this.emptyMessage = "No records found"
      }
      this.filterUserForTrigger$ = res.records;
    })
  }

  setUserIdForUser(event) {
    console.log(event);
    this.add.TracedEntityId = event.Id;
    this.userName = event.Name;
    console.log("USerId", this.add.TracedEntityId);
    console.log(this.userName);

  }

  setDebugLevelId(event) {
    console.log(event);
    this.add.DebugLevelId = event.Id;
    this.devName = event.DeveloperName;
    console.log("debug level ID ", this.add.DebugLevelId);
  }


  filterDebugLevel(event) {
    console.log(event.query);
    this.mine.searchDebugLevel(event.query).subscribe(res => {
      console.log(res.records);
      if (res.records.length === 0) {
        this.emptyMessage = "No records found"
      }
      this.filterDebugLevel$ = res.records;
    })
  }


  createUser() {
    console.log(this.add);
    let date = new Date();
    date.setDate(date.getDate() + 1);
    console.log(new Date(date.toString().split('GMT')[0] + ' UTC').toISOString());
    console.log("tomorrow date", date);
    this.add.ExpirationDate = date;
    this.add.LogType = "DEVELOPER_LOG"
    this.mine.create(this.add).subscribe(res => {
      this.showUserDialog = false;
      console.log(res);
      this.fetchTraceLogs();
    },
      err => {
        console.log(err.error[0].message);
      })
  }

  createClass() {
    console.log(this.add);
    let date = new Date();
    date.setDate(date.getDate() + 1);
    console.log(new Date(date.toString().split('GMT')[0] + ' UTC').toISOString());
    console.log("tomorrow date", date);
    this.add.ExpirationDate = date;
    this.add.LogType = "CLASS_TRACING";
    this.mine.create(this.add).subscribe(res => {
      this.showClassDialog = false;

      console.log(res);
      this.fetchTraceLogs();
    }, err => {
      console.log(err.error[0].message);

    })
  }



  createTrigger() {
    console.log(this.add);
    let date = new Date();
    date.setDate(date.getDate() + 1);
    console.log(new Date(date.toString().split('GMT')[0] + ' UTC').toISOString());
    console.log("tomorrow date", date);
    this.add.ExpirationDate = date;
    this.add.LogType = "CLASS_TRACING"
    this.mine.create(this.add).subscribe(res => {
      this.showTriggerDialog = false;

      console.log(res);
      this.fetchTraceLogs();
    }, err => {
      console.log(err.error[0].message);

    })
  }

  goForIgnition() {
    return this.add.TracedEntityId && this.add.DebugLevelId;
  }

  // goToNewWindow() {
  //   chrome.windows.create({
  //     url: "index.html",
  //     type: 'panel',
  //     width: 1200,
  //     height: 800,

  //   })
  //   this.showDialog = false;
  //   this.NewWindow = true;

  // }



  // getDebugLevel() {
  //   this.debugLevel.getDebugLevel().subscribe(res => {
  //     console.log("debug level", res);
  //     this.fetchDebugLevel$ = res.records;
  //   })
  // }


}
