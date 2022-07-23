import { Component, OnInit } from '@angular/core';
import{User} from 'src/app/Model/User';
import {UsersService} from 'src/app/Services/users.service'

import {UserNameValidators} from 'src/app/CustomValidation/UserName.validators'

import{FormGroup,FormControl,FormBuilder,Validators,AbstractControl} from'@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  
  Users:User[]=[];
  Id:number=0;
  user:any={};
  UserUpdate:User=new User(0,"","","",{city:"",street:"",zipcode:"",suite:""},"","",{name:""});
  isHidden:boolean=false;

  ngOnInit(){

   this.getAllUser();

   
  }

  getAllUser(){

    this.isHidden=false;

    this.service.getAll().subscribe({

      next:a=>{this.Users=a}

    });
    console.log(this.Users);

  }
  getUserById($event:any){

   this.Id=parseInt($event.value);
     this.service.getById(this.Id).subscribe({

      next:a=>{this.user=a}

    });
    this.isHidden=true;
    $event.value=' ';
    console.log(this.user);
  }
  AddUser(user:User){
    this.service.Post(user).subscribe({

      next:a=>{this.Users.push(user)}

    });
  }
  DeleteUser(user:User){

      this.service.Delete(user.id).subscribe({next:a=>{
        this.Users.splice(this.Users.indexOf(user),1)
      }});
  }   

  UpdateUser(user:User,id:number){
    this.service.Put(user,id).subscribe({

      next:a=>{this.UserUpdate=a}

    });
  

  }
goToBack(){
  this.isHidden=false;
  console.log("dddddd");

}
save(user:FormGroup){
  if(this.Id==0){
     this.AddUser(user.value);
 
    } else{
      this.UpdateUser(user.value,this.Id) 
       console.log(user.value)
  }
}
ClickToUpdate(user:User){
  this.Id=user.id;
  this.UserUpdate=user;
  console.log(this.Id);
}  
UserForm:FormGroup= new FormGroup({
  name: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),

  }),
  phone: new FormControl(''),
  website: new FormControl(''),
  company: new FormGroup({
    name: new FormControl(''),
   

  }),
});;

constructor(private service : UsersService,private fb:FormBuilder ) {
  this.UserForm=this.fb.group({
   
    name:['',Validators.required],
    username: ['',[Validators.required,UserNameValidators.CannotContainSpace]],
    email: [' ',[Validators.required,Validators.email]],
    address: this.fb.group({
        street: ['',Validators.required],
        suite: ['',Validators.required],
        city: ['',Validators.required],
        zipcode: ['',Validators.required]
    }),
    phone:['',[Validators.required,Validators.pattern("^[0-9]{11}")]],
    website: ['',Validators.required],
    company:this.fb.group({
        name: ['',Validators.required]
    })
  });
 }
 get f(): { [key: string]: AbstractControl } {
  return this.UserForm.controls;
}
get a() {
  return (<FormGroup>this.UserForm.get('address')).controls;
}
get c() {
  return (<FormGroup>this.UserForm.get('company')).controls;
}


//  get name(){
//    return this.UserForm.get('name');
//  }
//  get UserName(){
//   return this.UserForm.get("username");
// }
// get Email(){
//   return this.UserForm.get("email");
// }
// get Street(){
//   return this.UserForm.get("address.street");
// }
// get Suite(){
//   return this.UserForm.get("address.suite");
// }
// get City(){
//   return this.UserForm.get("address.city");
// }
// get Zipcode(){
//   return this.UserForm.get("zipcode");
// }
// get Website(){
//   return this.UserForm.get("website");
// }
// get Phone(){
//   return this.UserForm.get("phone");
// }
// get CompName(){
//   return this.UserForm.get("company.name");
// }

}