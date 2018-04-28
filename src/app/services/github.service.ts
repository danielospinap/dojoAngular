import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GithubService {

  constructor(public _http: Http) { }
  appLink:any = "https://api.github.com/users/";
  public get (name : string): Observable<any>{
    var link: string = this.appLink + name;
    return this._http.get(link).map((response) =>response.json());
  }
}
