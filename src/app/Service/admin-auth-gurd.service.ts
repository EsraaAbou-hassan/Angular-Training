import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGurdService implements CanActivate{
  constructor(private Auth:LoginService) { }
  
  canActivate():Observable<boolean>{
    
    return this.Auth.appUser$
                     .pipe(map(cuser => cuser.isAdmin||false));


  
}

}
