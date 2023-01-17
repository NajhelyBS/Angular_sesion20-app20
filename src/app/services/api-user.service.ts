import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements OnInit{

  private urlJSON = "";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  getShow(){
    return this.http.get<any>(this.urlJSON);
  }
}
