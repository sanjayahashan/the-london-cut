import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserService } from '../../shared/services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, public fb: FormBuilder, private router: Router) { }

  matcher = new MyErrorStateMatcher();
  public signInForm: FormGroup;
  serverErrorMessages: string;
  userDetails;

  ngOnInit() {
    this.loginForm();
  }

  get email(){
    return this.signInForm.get('email');
  }

  get password(){
    return this.signInForm.get('password');
  }

  loginForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(form: NgForm){
    console.log("in on submit");
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        
        console.log("in user profile");
        this.router.navigateByUrl('/admin');
        // this.userService.getUserProfile().subscribe(
        //   res => {
        //     console.log("in response");
        //     this.userDetails = res['user'];
        //     console.log(this.userDetails);
        //   },
        //   err => {
    
        //   }
        // );
        // var role = this.userDetails.userRole;
        // if (role == '2'){
        //   console.log("this is customer");
        //   this.router.navigateByUrl('/index');
        // }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    )
  }
}
