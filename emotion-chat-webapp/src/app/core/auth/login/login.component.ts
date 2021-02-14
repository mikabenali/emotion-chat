import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {UserModel} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  public alert: boolean = false
  public alertMsg: string = 'Error'

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public loginFormSubmit() {
      if (! this.loginForm.valid) {
        return
      }

      this.authService.login(this.loginForm.getRawValue())
          .subscribe(response => {
              this.alert = false;
              this.router.navigateByUrl('messenger')
          }, error => {
            this.alert = true;

            if (error.status === 401) {
              this.alertMsg = 'Wrong username or password';
            } else if (error.status === 404) {
              this.alertMsg = 'User not found';
            } else {
              this.alertMsg = 'Error';
            }
          })
  }
}
