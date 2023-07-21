import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 
  courses: any[];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getCourses()
      .subscribe(
        listofCourses => {
          this.courses = listofCourses;
        },
        error => {
          console.error(error);
        }
      );
  }

}
