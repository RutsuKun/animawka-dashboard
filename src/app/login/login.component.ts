import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_INITIALIZER} from '@angular/router'
import { APIService } from '../api.service'
import { animate } from '@angular/animations';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  data: any;
  token: any;
  error = false;
  constructor(private API: APIService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    const u: UserLogin = ({
      email:this.email,
      password:this.password
    });

    this.API.login(u).subscribe((loginData: any) => {
      if (loginData.user && loginData.user.token) {
        localStorage.setItem('token', loginData.user.token);
        console.log(loginData.user.username);
        console.log(loginData.user.token);
        this.router.navigate(['/main']);
      } else {
        this.error = true;
      }

      
    })
  }



}
export interface UserLogin{
  email:string,
  password:string
} 
export interface UserLogged{
  ID?:number,
  username?:string,
  email?:string,
  token?:string,
}
export interface Anime{
ID: number,
user:number,
name:string,
namejap:string,
nameeng:string,
episodes:number,
translate:string,
corrector:string,
description:string,
nsfw:number,
image:string,
subgroup:number,
type:number,
active:number,
date:Date,
tags:string,
mal:string,
studio:string,
episodelen:number,
emission:Date,
season:number,
seasonyear:number,
status:number,
genres:string
}
