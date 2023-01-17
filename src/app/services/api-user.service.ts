import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements OnInit{

  urlJSON = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) {
    console.log("Conección correcta con el servidor");
   }

  ngOnInit(): void {
    this.getShow();
  }

  getShow(){
    return this.http.get<any>(this.urlJSON);
  }
}
