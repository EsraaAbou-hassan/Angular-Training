import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject} from '@angular/fire/compat/database';
// import {FirebaseObjectObservable} from '@angular/fire/';

import { IUser} from 'src/app/Model/user';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }
  save(user:any,username:string){

    if(username==''&&user.dispalyName!=null){//forlogin in email and password

        this.db.object('/users/'+user.uid).update({
          name:user.displayName,
          email:user.email,



        });
      }else if(username!=''){
        user.dispalyName=username;
        this.db.object('/users/'+user.uid).set({
          name:username,
          email:user.email,
          isAdmin:false
        })
       }

    console.log("user in save",user)

  }
  get(uid:string):AngularFireObject<IUser>{
     return  this.db.object('/users/'+uid);
  }

}
