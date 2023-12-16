import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {PageModel} from "../model/Page.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = "users";
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(public http:HttpClient) {
  }

  pagination(url:string , page:number , per_page:number):Observable<PageModel>{
    return this.http.get<PageModel>(`${this.apiBaseUrl}/${url}?page=${page}&per_page=${per_page}`);
  }
}
