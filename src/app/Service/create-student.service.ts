import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {
 
  baseUrl :any="http://localhost:8080";
  
  constructor(private http:HttpClient) { }

  createStudent(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/create-student`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }

  getStudents(): Observable<any[]>{
      const url = `${this.baseUrl}/api/v1/student/all-students`;
       console.log("baseUrl",this.baseUrl); 
       return  this.http.get<any[]>(url);
  }

  updateStudent(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/student/update/${data.studentId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.put(url,data);
               
  }

  deleteStudent(studentId:number){
    const url = `${this.baseUrl}/api/v1/student/delete/${studentId}`;
       console.log("baseUrl",url); 
   return  this.http.delete(url);
               
  }

  

}
