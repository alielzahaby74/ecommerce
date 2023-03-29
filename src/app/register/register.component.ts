import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isLoading: boolean = false;
  error: string = "";

  constructor (private _AuthService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      rePassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    });
  }

  register() {
    this.error = "";
    this.isLoading = true;
    let data : any = this.registerForm.value;
    // console.log(data);
    
    this._AuthService.register(data).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        this.error = err.error.errors.msg;
      },
      complete: () => {
        this.isLoading = false;
      }
        
    })
  }

}
