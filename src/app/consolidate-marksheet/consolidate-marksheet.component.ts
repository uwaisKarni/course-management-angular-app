import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-consolidate-marksheet',
  templateUrl: './consolidate-marksheet.component.html',
  styleUrls: ['./consolidate-marksheet.component.css']
})
export class ConsolidateMarksheetComponent implements OnInit {

  marksheets: any[];
  courseId: number;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

  }

  //getConsolidatedMarksheet
  getresults(): void {
    this.adminService.getConsolidatedMarksheet(this.courseId)
      .subscribe(
        marksheets => {
          this.marksheets = marksheets;
        },
        error => {
          console.error(error);
        }
      );

  }

  getCoursMarksheet(courseId: number): void {


    this.courseId = courseId;
    this.getresults();

  }

  clearFilter(): void {
    this.courseId = null;
    this.marksheets = null;
  }


}
