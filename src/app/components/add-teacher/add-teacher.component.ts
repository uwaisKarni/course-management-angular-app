import { Component, OnInit,ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/Service/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  @ViewChild('formRef', { static: false }) form: any;

 
  successMessage:string="";
  errorMessage:string="";

  
 data={
   firstName:"",
   lastName:"",
   code:"",
   email:""
 }

  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {

  }

  doSubmitForm() {
    console.log("Sumit form");
    console.log("DATA",this.data);
    this.teacherService.createTeacher(this.data).subscribe(
      (response)=>{
          console.log(response);
          this.successMessage = "Teacher created successfully!";
          setTimeout(() => {
            this.successMessage= null;
          }, 2000);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = "An error occurred while Adding the Teacher.";
        setTimeout(() => {
          this.errorMessage= null;
        }, 2000);
      }
      
    );
    
    this.data = {
      firstName: '',
      lastName: '',
      code: '',
      email: ''
    };
  }

}
