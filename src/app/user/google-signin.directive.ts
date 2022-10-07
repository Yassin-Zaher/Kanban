import { Directive, HostListener } from '@angular/core';
/* Firebase Imports */
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onLogin() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

}
