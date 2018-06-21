import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(public authService: AuthService, private _firebaseAuth: AngularFireAuth, private router: Router) {}
  ngOnInit() {
  }


  signInWithEmail() {

        // this.router.navigate(['dashboard']);
    this.router.navigateByUrl('dashboard');

    // this.authService.signInRegular(this.user.email, this.user.password)
    //   .then((res) => {
    //     console.log(res);
    //
    //     this.router.navigate(['dashboard']);
    //   })
    //   .catch((err) => console.log('error: ' + err));
  }


  // signInWithFacebook() {
  //   this.authService.signInWithFacebook()
  //     .then((res) => {
  //       this.router.navigate(['dashboard']);
  //     })
  //     .catch((err) => console.log(err));
  // }



  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }
}
