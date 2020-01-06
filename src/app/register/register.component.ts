import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  email: string;
  password: string;
  password2:string;
  registered = false;
  error = false;
  constructor(private API: APIService, private router: Router) { }

  ngOnInit() {

  }

  register(){
    const u: UserRegister = ({
      username:this.username,
      email:this.email,
      password:this.password,
      password2:this.password2
    });
    this.API.register(u).subscribe((registerData: any) => {
      if (registerData && registerData.done === true) {
        this.registered = true;
        this.error = false;
      } else {
        this.error = true;
      }
    })
  }

}

export interface UserRegister{
  username:string,
  email:string,
  password:string,
  password2:string
}
export interface UserRegistered{
  done:string
}