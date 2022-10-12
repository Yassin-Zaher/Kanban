import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }


  authRequired() {
    this.snackBar.open(
      "You must be logged in!", "GO", {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef
      ?.onAction()
      .pipe(
        tap(_ => {
          this.router.navigate(['/login'])
        })
      )
      .subscribe()
  }
}
