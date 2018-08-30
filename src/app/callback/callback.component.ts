import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  salesforcePodName: any;
  instanceUrl: any;
  logUserId: any;
  userSession: any;
  constructor(private router: Router, private activate: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getHostName();

  }

  getHostName() {
    // this.router.navigate(['/home'])

    chrome.cookies.getAll({ domain: "salesforce.com", name: "sid_Client" }, (value) => {
      console.log(value);
      for (var idx = 0; idx < value.length; idx++) {
        var replacementNodeName = this.hostName(value[idx].domain);
        console.log('Visualforce / lightning - Salesforce URL Match ', replacementNodeName);
        this.salesforcePodName = replacementNodeName;
        localStorage.setItem('nodeName', this.salesforcePodName);
        console.log("instance url ", value[idx].domain);
        this.instanceUrl = "https://" + value[idx].domain
        localStorage.setItem('instance-url', this.instanceUrl);
        console.log("instance url is from callback component", this.instanceUrl);

        chrome.cookies.get({ url: this.instanceUrl, name: 'disco' }, (logUserId) => {
          let str = logUserId.value;
          let a = str.split(':')[2];
          console.log("value of a ", a);
          this.logUserId = a;
          localStorage.setItem('userId', a)

        });
        chrome.cookies.get({
          "url": 'https://' + value[idx].domain,
          "name": "sid"
        }, (cookie) => {
          console.log('cookie value', cookie.value);
          if (cookie.value) {
            this.userSession = cookie.value;
            localStorage.setItem('session', this.userSession);
            this.router.navigate(['/home/my'])
            console.log("going to route");
            
          }
          else {
            console.log("not going");
            
            this.router.navigate(['/auth'])
          }
        })
      }
    })
  }

  hostName(name) {
    return name.substring(0, name.indexOf('.salesforce.com'));
  }

}


