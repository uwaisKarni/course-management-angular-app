import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Service/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
 
  teachers: any[];
  filteredTeachers: any[] = [];
  teacherId: number;
  constructor(private teacherService:TeacherService,private router: Router) { }

  ngOnInit(): void {
      
    this.getTeachers();

  }
  
  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(
        teachers => {
          this.teachers = teachers;
          this.filteredTeachers = teachers;
        },
        error => {
          console.error(error);
        }
      );
  }

  filterTeachers(): void {
    if (this.teacherId !== null) {
      this.filteredTeachers= this.teachers.filter(teacher => teacher.teacherId === +this.teacherId);
    } else {
      this.filteredTeachers = this.teachers;
    }
  }
  
  clearFilter(): void {
    this.teacherId = null;
    this.filteredTeachers = this.teachers;
  }
  
  editStudent(teacher: any): void {
    // Logic for editing a student
    console.log('Editing teacher:', teacher);
  }
  
  deleteTeacher(teacherId:number): void {
    // Logic for deleting a student
    console.log('Deleting teacher:', teacherId);

    this.teacherService.deleteTeacher(teacherId).subscribe(
      () => {
        // Successful deletion
        console.log('Teacher deleted successfully.');
        this.getTeachers();
        //window.location.reload();
        //this.removeItemFromList(studentId); 
      },
      (error) => {
        // Error handling
        console.error('An error occurred:', error);
      }

       
    );

  }



}
