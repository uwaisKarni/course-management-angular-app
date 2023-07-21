import { Component, NgModule, OnInit } from '@angular/core';
import { CreateStudentService } from 'src/app/Service/create-student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  
  successMessage:string="";
  errorMessage:string="";

  
 data={
  
   firstName:"",
   lastName:"",
   email:""

 }
 

  constructor(private student: CreateStudentService) { }

  ngOnInit(): void {

  }

  doSubmitForm() {
    console.log("Sumit form");
    console.log("DATA",this.data);
    this.student.createStudent(this.data).subscribe(
      (response)=>{
          console.log(response);
          this.successMessage = "Student created successfully!";
          setTimeout(() => {
            this.successMessage = null;
          }, 2000);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = "An error occurred while Adding the student.";
        setTimeout(() => {
          this.successMessage = null;
        }, 2000);
      }
    );

    this.data = {
      firstName: '',
      lastName: '',
      email: ''
    };

  }

}
