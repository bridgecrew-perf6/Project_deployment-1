import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../MODEL/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // user: User;
  constructor(private router:Router) { }
  move_to_login():void{
    this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
 
  }
 

  

}
