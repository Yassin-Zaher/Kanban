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

  form: FormGroup | any;
  status = "login" || "signin" || "reset";
  isLoading = false;

  serverRespondeMsg: any;

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

  changeStatus(val: string) {
    this.status = val
  }


  async onUserSubmit() {
    this.isLoading = true;


    const email = this.email?.value;
    const password = this.password?.value;



    try {
      if (this.isUserLoggedIn) {
        await this.auth.signInWithEmailAndPassword(email, password)
      }
      if (this.isUserSignup) {
        await this.auth.createUserWithEmailAndPassword(email, password)
      }

      if (this.isPassResset) {
        this.serverRespondeMsg = "Check your email"
      }
    } catch (err) {
      this.serverRespondeMsg = err;
    }

    this.isLoading = false

  }




}
