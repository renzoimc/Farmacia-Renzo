import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginError:string="";
  loginForm=this.formBuilder.group({
      email:['iva@gmail.com'],
      password: [''],
    })

  constructor(
    private formBuilder:FormBuilder
  ) { }

}
