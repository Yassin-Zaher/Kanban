import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Directive({
  selector: '[appGoogleSignin]'
})
//This derective is for the Login with google button
export class GoogleSigninDirective {

  constructor(private auth: AngularFireAuth) { }


  @HostListener('click')
  onLoginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

  }

}




