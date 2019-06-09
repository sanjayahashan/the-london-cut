import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { UserService } from '../../shared/services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, public fb: FormBuilder) { }

  matcher = new MyErrorStateMatcher();
  public signUpForm: FormGroup;
  public submitted: boolean = false;
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  ngOnInit() {
    this.registerForm();
  }

  registerForm() {
    this.signUpForm = this.fb.group({
      // userRole: [''],
      firstName: ['', [Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  static matchPassword(AC: AbstractControl) {
    let pass = AC.get('password').value;
    let confirmPass = AC.get('confirmPassword').value;

    if(pass != confirmPass) {
      AC.get('confirmPassword').setErrors( {matchPassword: true} )
    }
    else {
      return null
    }
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false,4000);
        // this.signUpForm.reset();
        this.resetForm(form);
      },
      err => {
        if (err.status == 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong!';
          setTimeout(() => this.serverErrorMessages = '',4000);
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  // checkPasswords(group: FormGroup {
  //   let pass = group.controls.password.value;
  //   let confirmPass = group.controls.confirmPassword.value;

  //   return pass === confirmPass ? null : { notSame: true }
  // })

}