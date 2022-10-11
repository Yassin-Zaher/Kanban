import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {



  constructor(private auth: AngularFireAuth,
    private fb: FormBuilder) {

  }

  form: FormGroup | undefined;
  status = "login" || "signin" || "reset";
  isLoading = false;

  serverResponde = '';

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
      passwordConfirmation: ['', []]
    })
  }


  get isUserSignup() {
    return this.status === "signup";
  }

  get isPassResset() {
    return this.status === "reset"
  }

  get isUserLoggedIn() {
    return this.status === "login"
  }

  get email() {
    return this.form?.get('email')
  }

  get password() {
    return this.form?.get('password')
  }

  get passwordConfirmation() {
    return this.form?.get('passwordConfirmation')
  }


  get isPasswordMatch() {
    if (this.status !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirmation?.value;
    }
  }


  onUserSubmit() {

  }




}
