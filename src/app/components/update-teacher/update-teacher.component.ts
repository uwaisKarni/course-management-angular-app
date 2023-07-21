import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/Service/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
 
  successMessage:string="";
  errorMessage:string="";
  paramValue:any;
  
 data={
  
   teacherId:"",
   firstName:"",
   lastName:"",
   code:"",
   email:""

 }


  constructor(private teacherService:TeacherService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramValue = this.route.snapshot.paramMap.get('teacherId');
    console.log("paramValue::-",this.paramValue);
    this.data.teacherId =this.paramValue;    
  }
  
  doSubmitForm() {
    console.log("Sumit form");
    console.log("DATA",this.data);
    this.teacherService.updateTeacher(this.data).subscribe(
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
      teacherId:"",
      firstName:"",
      lastName:"",
      code:"",
      email:""
    }

  }



}
