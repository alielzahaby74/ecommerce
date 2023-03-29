import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error: string = '';
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    let data : any = this.loginForm.value;
    this._AuthService.login(data).subscribe({
      next: (response: any) => {
        console.log(response);
        this._Router.navigate(['/all']);
      },
      error: (err: any) => {
        console.log(err);
        this.error = err.error.message;
      }
    });
  }

}
