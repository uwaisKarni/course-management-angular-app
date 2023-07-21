import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   paramValue: any;
   courseDetails:any;
   courseId:number; 
  constructor(private adminService:AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramValue = this.route.snapshot.paramMap.get('courseId');
    if(this.paramValue!=null){
    this.courseId=this.paramValue;
    this.getresults();
    }
  }
   //getAllCourseDetails
   getresults(): void {
    this.adminService.getAllCourseDetails(this.courseId)
      .subscribe(
        courseDetails => {
          this.courseDetails = courseDetails;
        },
        error => {
          console.error(error);
        }
      );

  }

  getCoursDetails(courseId: number): void {

    this.courseId = courseId;
    this.getresults();

  }

  clearFilter(): void {
    this.courseId = null;
    this.courseDetails = {};
  }



}
