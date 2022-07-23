import{AbstractControl,ValidationErrors} from'@angular/forms'

export class UserNameValidators{
  static CannotContainSpace(control:AbstractControl):ValidationErrors|null{
     if((control.value as string).indexOf(' ')>=0)
        return {CannotContainSpace:true}

     return null;   
  }

}