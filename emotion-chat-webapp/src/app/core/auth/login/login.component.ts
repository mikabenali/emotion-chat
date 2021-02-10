import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public alert: boolean = false

  constructor(
      private fb: FormBuilder,
      private authService: AuthService
  ) {
  }

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

      this.authService.login(this.loginForm.getRawValue()).subscribe()
  }
}
