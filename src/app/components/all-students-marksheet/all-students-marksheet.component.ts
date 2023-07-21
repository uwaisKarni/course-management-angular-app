import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-all-students-marksheet',
  templateUrl: './all-students-marksheet.component.html',
  styleUrls: ['./all-students-marksheet.component.css']
})
export class AllStudentsMarksheetComponent implements OnInit {
  
  students: any[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getStudentsMarksheet();
  }
 
  getStudentsMarksheet():void {
  
    this.adminService.getAllStudnetMarksheet()
      .subscribe(
        students => {
          this.students = students;
        },
        error => {
          console.error(error);
        }
      );

  }

}
