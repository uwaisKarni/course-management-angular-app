import { Component, OnInit } from '@angular/core';
import { CreateStudentService } from 'src/app/Service/create-student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
 
  successMessage:string="";
  errorMessage:string="";
  paramValue:any;
  
 data={
  
   studentId:"",
   firstName:"",
   lastName:"",
   email:""

 }

  constructor(private studentServie:CreateStudentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.paramValue = this.route.snapshot.paramMap.get('studentId');
    console.log("paramValue::-",this.paramValue);
   this.data.studentId =this.paramValue;  
  }
 
  doSubmitForm() {
    console.log("Sumit form");
    console.log("DATA",this.data);
    this.studentServie.updateStudent(this.data).subscribe(
      (response)=>{
          console.log(response);
          this.successMessage = response.msg
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
  
      studentId:"",
      firstName:"",
      lastName:"",
      email:""
   
    }

  }


}
