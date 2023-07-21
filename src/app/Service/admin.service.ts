import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  baseUrl :any="http://localhost:8080";

  private username: string;

  setUsername(username: string) {
    this.username = username;
    //set in storage
    this.setItem("username",this.username);
    console.log("UserName Inside Service",username);
  }

  getUsername(): string {
    //get from storage
    console.log("UserName Inside Service GetMethod",this.getItem('username'));
    return  this.getItem('username');
     
  }

  constructor(private http:HttpClient) { }

  
  assignTeacher(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/assign-teacher?courseId=${data.courseId}&teacherId=${data.teacherId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }

 enrollIntoCourse(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/student/enroll-course?courseId=${data.courseId}&studentId=${data.studentId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }
  assignMarks(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/saveMarks`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }

  getConsolidatedMarksheet(courseId:number): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/course-marksheet?courseId=${courseId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.get(url);
               
  }

  getAllStudnetMarksheet(): Observable<any>{
    const url = `${this.baseUrl}/api/v1/student/all-students-marksheet`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.get(url);
               
  }

  getAllCourseDetails(courseId:number): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/get-course-details/${courseId}`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.get(url);
               
  }
   

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key,value);
  }

  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? item : null;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }





}
