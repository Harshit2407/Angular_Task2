import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  constructor(private auth:AuthService,private router:Router) {
    if(this.auth.loggedIn){
      this.router.navigate(['employee'])
    }
   }

   login(){
     if(this.username!='' && this.password!=''){
       if(this.auth.login(this.username,this.password)){
         this.router.navigate(['employee']);
       }
       else{
         alert("Wrong Credential")
       }
     }else{
       alert("Please enter username and password")
     }
   }

  ngOnInit(): void {
  }

}
