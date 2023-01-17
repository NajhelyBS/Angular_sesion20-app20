import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  users:any = [];
  titulo = "Usuarios";
  show = false;
  
  constructor(private usuario:ApiUserService){}

  ngOnInit(): void {
   console.log("Iniciando Componente - datos ocultos");
  }

  getShow(){

    this.usuario.getShow().subscribe(
      res => {
        this.users = res;
        this.show = true;
      }, err => {
        alert("error");
      }
    )
  };

  }

