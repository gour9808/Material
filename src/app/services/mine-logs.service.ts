import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from './constants';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class MineLogsService {
   userSession = localStorage.getItem('session');
   logUserId = localStorage.getItem('userId')
   instanceUrl = localStorage.getItem('instance-url')


  constructor(private http: HttpClient) {

   }

  getMineLogs(logUserId): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');

    //headers.set("Authorization", "Bearer " + this.userSession);
    console.log("user session from serveice", this.userSession);
    headers.append('Accept', "application/json")
    let BASE_URL = this.instanceUrl + "/services/data/v35.0/tooling/query/?q=";
    return this.http.get(BASE_URL + encodeURIComponent(Constants.GET_MINE_LOGS(logUserId)),  {headers: new HttpHeaders().set('Authorization', "Bearer " + this.userSession)});
  }


  getAllLogs(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    headers.append('Accept', "application/json");
    let BASE_URL = this.instanceUrl + "/services/data/v35.0/tooling/query/?q=";
    return this.http.get(BASE_URL + encodeURIComponent(Constants.GET_ALL_LOGS()), { headers: headers });
  }

  getParticularLog(recordId) {
    let headers = new HttpHeaders();
    // headers.append('Accept', "text/plain");
   
    // headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.get(this.instanceUrl + Constants.GET_PARTICULAR_LOG(recordId),  { headers: headers })

  }


  // deleteMineCached(): Observable<any> {
  //   let url = "SELECT id, Application, Operation, Status, DurationMilliseconds, LogLength, StartTime, LogUser.Name from ApexLog where  StartTime > " + this.lastSeenTime + " and  LogUserId = " + "'" + this.logUserId.userId + "'" + "  ORDER BY StartTime DESC LIMIT 20"
  //   let headers = new HttpHeaders();
  //   headers.append('Api-User-Agent', 'Example/1.0');
  //   headers.append("Authorization", "Bearer " + this.userSession.token);
  //   let BASE_URL = this.instanceUrl.currentURL + "/services/data/v35.0/tooling/query/?q=";
  //   return this.http.get(BASE_URL + encodeURIComponent(url), { headers: headers })

  // }

  downloadLogs(recordId) {
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.get(this.instanceUrl + Constants.DOWNLOAD_LOGS(recordId), { headers: headers })
  }

  // deleteAllCached(): Observable<any> {
  //   let url = "SELECT id, Application, Operation, Status, DurationMilliseconds, LogLength, StartTime, LogUser.Name from ApexLog where  StartTime > " + this.lastSeenTime + " ORDER BY StartTime DESC LIMIT 20"
  //   let headers = new HttpHeaders();
  //   headers.append('Api-User-Agent', 'Example/1.0');
  //   headers.append("Authorization", "Bearer " + this.userSession);
  //   let BASE_URL = this.instanceUrl + "/services/data/v35.0/tooling/query/?q=";
  //   return this.http.get(BASE_URL + encodeURIComponent(url), { headers: headers })

  // }


  fetchFlags(): Observable<any> {
    let url = "Select Id, LogType, DebugLevelId, DebugLevel.DeveloperName,  TracedEntityId, TracedEntity.Name, ExpirationDate  from TraceFlag  order by ExpirationDate DESC "
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    let BASE_URL = this.instanceUrl + "/services/data/v35.0/tooling/query/?q=";
    return this.http.get(BASE_URL + encodeURIComponent(url), { headers: headers })

  }

  deleteParticularTracelag(traceFlagId) {
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.delete(this.instanceUrl + Constants.DELETE_PARTICULAR_FLAG(traceFlagId), { headers: headers })
  }

  searchUserForUser(name): Observable<any> {
    let url = "Select Id, Name, Profile.Name from User where IsActive = true AND Name like '%" + name + "%'"
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.get(this.instanceUrl + "/services/data/v35.0/query/?q=" + encodeURIComponent(url))

  }

  searchDebugLevel(name): Observable<any> {
    let url = "Select Id, DeveloperName from DebugLevel where DeveloperName like '%" + name + "%'"
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    let BASE_URL = this.instanceUrl + "/services/data/v35.0/tooling/query/?q=";

    return this.http.get(BASE_URL + encodeURIComponent(url))

  }

  searchUserForClass(name): Observable<any> {

    let url = "Select NamespacePrefix, Name, Id From ApexClass Where Name like '%" + name + "%'"
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.get(this.instanceUrl + "/services/data/v35.0/query/?q=" + encodeURIComponent(url))

  }

  searchUserForTrigger(name): Observable<any> {

    let url = "Select NamespacePrefix, Name, Id From ApexTrigger Where Name like '%" + name + "%'"
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.get(this.instanceUrl + "/services/data/v35.0/query/?q=" + encodeURIComponent(url))
  }

  create(body) {
    let headers = new HttpHeaders();
    headers.append('Api-User-Agent', 'Example/1.0');
    headers.append("Authorization", "Bearer " + this.userSession);
    return this.http.post(this.instanceUrl + "/services/data/v35.0/tooling/sobjects/TraceFlag/", body)
  }


}
