import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from '@angular/fire/auth';
import { ActivatedRoute} from '@angular/router';
import { IUser} from 'src/app/Model/user';
import { switchMap} from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username:string='';
  user$:Observable<any>;

  constructor(private afAuth:AngularFireAuth,private router:Router
    ,private route:ActivatedRoute,
    private UserAuth:UserService) {
    this.user$=afAuth.authState;

  }

  Register(email: string, password: string,username:string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(() => {

      // if (this.afAuth.currentUser != null) {
      //  var user= this.afAuth.currentUser;

      //   }
        this.router.navigate(['/login']);
    },error => {
      console.log('Something went wrong: ', error);
      this.router.navigate(['/signup']);

    });
  }
  login(email: string, password: string) {


      this.returnUrl();
      this.afAuth.signInWithEmailAndPassword(email, password)
    .then(()=>{

       localStorage.setItem('currentUser','true');

      },err=>{
      console.log('Something went wrong: ', err.message);
      this.router.navigate(['/login']);

    });

  }

   googleLogin() {
    this.returnUrl();
    return this.afAuth.signInWithRedirect(new GoogleAuthProvider)
    .then(()=>{

       let url=localStorage.getItem('returnUrl');
       this.router.navigate( [url]);
      },err=>{
      console.log('Something went wrong: ', err.message);
      this.router.navigate(['/login']);

    });

  }
  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('token');

      this.router.navigate(['/login']);
    });
  }
  get appUser$():Observable<any>{// is a poreperty
    return this.user$.pipe(switchMap( user=>{
     if(user) return this.UserAuth.get(user!.uid).valueChanges();
     return of(null)
    }
      ))
  }
 
  private returnUrl() {
    let returnUrl=  this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    localStorage.setItem('returnUrl', returnUrl);
  }


}
