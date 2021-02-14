import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
  public alert: boolean = false
  public alertMsg: string = 'Error'

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private route: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  public registerFormSubmit() {
    if (! this.registerForm.valid) {
      return
    }

    const user = this.registerForm.getRawValue()
    delete user.confirmPassword
    this.authService.register(user)
        .subscribe(response => {
          this.route.navigateByUrl('/auth/login');
        }, error => {
          this.alert = true;
          if (error.status === 409) {
            this.alertMsg = 'User already exist';
          } else {
            this.alertMsg = 'Error';
          }
        })
  }
}
