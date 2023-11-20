import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  hide=true;

  hides="Hide Form";

  onHide(){
    this.hide=!this.hide;
    this.hides="Show Form";
  }

 show=false;

 onTap(){
  this.show=!this.show;
 }
 
 reset() {
   this.loginForm.reset();
 }

 
  loginForm: any = FormGroup;
  submited = false;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword:['',[Validators.required]]
    })

  }
  get form() {
    return this.loginForm.controls;
  }

  submit() {
    this.submited = true;
    if (this.loginForm.valid) {
      console.log('value', this.loginForm.value)
    }
    else {
      console.error("Form is invalid");

    }

  }
  
 

}
