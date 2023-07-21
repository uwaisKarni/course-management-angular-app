import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 
  baseUrl :any="http://localhost:8080";

  constructor(private http:HttpClient) { }


  getTeachers(): Observable<any[]>{
    const url = `${this.baseUrl}/api/v1/teacher/all-teachers`;
    console.log("baseUrl",this.baseUrl); 
    return  this.http.get<any[]>(url);
  }

  createTeacher(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/create-teacher`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }
 
  updateTeacher(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/teacher/update/${data.teacherId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.put(url,data);
               
  }

  deleteTeacher(teacherId:number){
    const url = `${this.baseUrl}/api/v1/teacher/delete/${teacherId}`;
       console.log("baseUrl",url); 
   return  this.http.delete(url);
               
  }
   

}
