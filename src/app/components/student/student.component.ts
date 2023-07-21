import { Component, OnInit } from '@angular/core';
import { CreateStudentService } from 'src/app/Service/create-student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  students: any[];
  filteredStudents: any[];
  studentId: number;
  constructor(private student: CreateStudentService,private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    console.log("Loaded Data For Students");
    this.student.getStudents()
      .subscribe(
        students => {
          this.students = students;
          this.filteredStudents = students;
        },
        error => {
          console.error(error);
        }
      );
  }

  filterStudents(): void {
    if (this.studentId !== null) {
      this.filteredStudents = this.students.filter(student => student.id === +this.studentId);
    } else {
      this.filteredStudents = this.students;
    }
  }
  
  clearFilter(): void {
    this.studentId = null;
    this.filteredStudents = this.students;
  }
  
  editStudent(student: any): void {
    // Logic for editing a student
    console.log('Editing student:', student);
  }
  
  deleteStudent(studentId:number,index:number): void {
    // Logic for deleting a student
    console.log('Deleting student:', studentId);

     this.student.deleteStudent(studentId).subscribe(
       
      () => {
        // Successful deletion
        console.log('Student deleted successfully.');
        this.getStudents();
        // const deletedStudent = this.filteredStudents.find(x => x.studentId === studentId);
        // this.filteredStudents.splice( this.filteredStudents.indexOf(deletedStudent),1);
        //this.contrats.splice(this.contrats.indexOf(deletedContrat), 1);
        //this.router.navigate(['/student']);
        //window.location.reload();
        //this.removeItemFromList(studentId); 
      },
      
      (error) => {
        // Error handling
        console.error('An error occurred:', error);
      }

     );
     

  }

  // removeItemFromList(studentId: number): void {
  //   this.filteredStudents = this.filteredStudents.filter(item => item.id !== studentId);
  // }

}
