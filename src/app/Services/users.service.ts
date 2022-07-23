import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{User} from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>(this.Url);
  
  }
  getById(id:number){
    console.log(id)
     return this.http.get<User>(this.Url+"/"+id)
  }
  Post(user:User){
    return this.http.post<User>(this.Url,user);

  }
  Put(user:User,id:number){
    return this.http.put<User>(this.Url+"/"+id,user);

  }
  Delete(id:number){
    return this.http.delete(this.Url+"/"+id)

  }
}
