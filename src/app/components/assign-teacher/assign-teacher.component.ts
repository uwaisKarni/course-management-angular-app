import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.css']
})
export class AssignTeacherComponent implements OnInit {

  successMessage:string="";
  errorMessage:string="";
  public isVisible: boolean = false;

  
 data={
  
   courseId:"",
   teacherId:""

 }

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  doSubmitForm() {
    console.log("Assign Teacher");
    console.log("DATA",this.data);
    this.adminService.assignTeacher(this.data).pipe(
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

    this.data = {
       courseId:"",
       teacherId:""
    }

  }


}
