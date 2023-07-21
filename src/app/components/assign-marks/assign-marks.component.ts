import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-assign-marks',
  templateUrl: './assign-marks.component.html',
  styleUrls: ['./assign-marks.component.css']
})
export class AssignMarksComponent implements OnInit {
  successMessage:string="";
  errorMessage:string="";
  myForm: FormGroup;
  //maximumMarks:number;
  //obtainMarks:number;
  validate:boolean=false;
  
 data={
  
   courseId:"",
   studentId:"",
   maximumMarks:"",
   obtainMarks:""

 }
  //formBuilder: any;
  //validateInputs: any;

  constructor(private adminService:AdminService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    // this.myForm = this.formBuilder.group({
    //   maximumMarks: ['', Validators.required],
    //   obtainMarks: ['', Validators.required]
    // }, { validators: this.validateInputs.bind(this) });
  }

  // validateInputs(formGroup: FormGroup) {
  //   const input1 = formGroup.get('maximumMarks').value;
  //   const input2 = formGroup.get('obtainMarks').value;
  //   if (input2 > input1) {
  //     formGroup.get('obtainMarks').setErrors({ greaterThanInput1: true });
  //   } else {
  //     formGroup.get('obtainMarks').setErrors(null);
  //   }
  // }

  doSubmitForm() {
    console.log("Enroll Into Course");
    console.log("DATA",this.data);
    this.adminService.assignMarks(this.data).pipe(
      catchError((error: any) => {
        let errorMessage = 'An error occurred.';
        if(error instanceof HttpErrorResponse){
        if (error.status === 404) {
          errorMessage = error.error.message;
          console.log(errorMessage);
        } else {
          // Handle other error cases if needed
          errorMessage = 'An HTTP error occurred: ' + error.message;
        }
      } else {
        // Handle non-HTTP errors
        errorMessage = 'A network error occurred.';
      }
        return throwError(errorMessage);
      })
    ).subscribe(
      (response)=>{
          console.log(response);
          this.successMessage = response.msg;
          setTimeout(() => {
            this.successMessage = null;
          }, 2000);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error;
        setTimeout(() => {
          this.errorMessage= null;
        }, 2000);
      }
    );

    this.data={
  
      courseId:"",
      studentId:"",
      maximumMarks:"",
      obtainMarks:""
   
    }

  }


  public onChange(event: any): void {
    if (this.data.obtainMarks > this.data.maximumMarks) {
      console.log('Incorrect');
      this.validate=true;
    }
}

}
