import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ISmartService {
  public rootUrl = "http://localhost:3000";
  constructor(private _http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };



  // buyPolicy(obj): Observable <any>{
  //   let url = `${this.rootUrl}/policyCount`;
  //   return this._http.post(url,obj);
  // }

  getCustData():Observable<any>{
    // let url = `${this.rootUrl}/policyCount`;
    let url = `http://10.117.189.228:8080/api/v1/customers`;
    return this._http.get(url);
  }

  getCategory():Observable<any>{
     // let url = `${this.rootUrl}/policyCount`;
     let url = `http://10.117.189.228:8080/api/v1/spendingCategory`;
    return this._http.get(url);
  }
  doTransact(obj):Observable<any>{
     // let url = `${this.rootUrl}/policyCount`;
  let body = JSON.stringify(obj);
     let url = `http://10.117.189.228:8080/api/v1/transaction`;
    return this._http.post(url,body, this.httpOptions);
  }

  getAllTransaction():Observable<any>{
     // let url = `${this.rootUrl}/policyCount`;
    let url = `http://10.117.189.228:8080/api/v1/transaction?ustomerId=1`;
    return this._http.get(url);
  }
}
