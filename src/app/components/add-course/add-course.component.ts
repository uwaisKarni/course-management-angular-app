import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  successMessage:string="";
  errorMessage:string="";

  
 data={
  courseName:"",
  courseTitle:"",
  maximumMarks:"",
  teacherId:""
 }

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {

  }

  doSubmitForm() {
    console.log("Sumit form");
    console.log("DATA",this.data);
    this.courseService.createCourse(this.data).subscribe(
      (response)=>{
          console.log(response);
          this.successMessage = response.msg;
          setTimeout(() => {
            this.successMessage= null;
          }, 2000);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error;// "An error occurred while Adding the Course.";
        setTimeout(() => {
          this.errorMessage= null;
        }, 2000);
      }
    ); 

    this.data={
      courseName:"",
      courseTitle:"",
      maximumMarks:"",
      teacherId:""
     }
    

  }
}
