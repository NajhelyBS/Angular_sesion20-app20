import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements OnInit{

  urlJSON = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Conección correcta con el servidor");
    this.getShow();
  }

  getShow(){
    return this.http.get<any>(this.urlJSON);
  }
}
