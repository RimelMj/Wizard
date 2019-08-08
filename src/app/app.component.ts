import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";


export interface Food {
   value: string;
   display: string;
}
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'Wizard';   
   isLinear=true;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;
   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,]);
   
   constructor(private _formBuilder: FormBuilder) {}
   processFile(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();}
   ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
         firstCtrl: ['', Validators.required]
      });
     
      
      this.thirdFormGroup = this._formBuilder.group({
         thirdCtrl: ['', Validators.required]
      });}
     
}
