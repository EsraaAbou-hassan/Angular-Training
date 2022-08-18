import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private Auth:LoginService,private router:Router) { 
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.Auth.user$.pipe(map(user=>{
      if(user)return true;
      this.router.navigate(['/login'],{ queryParams:{returnUrl:state.url}});
      return false;
      }));

  }
}
