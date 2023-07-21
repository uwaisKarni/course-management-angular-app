import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  baseUrl :any="http://localhost:8080";

  constructor(private http:HttpClient) { }


  getCourses(): Observable<any[]>{
    const url = `${this.baseUrl}/api/v1/course/all-course`;
    console.log("baseUrl",this.baseUrl); 
    return  this.http.get<any[]>(url);
  }
  
  createCourse(data:any): Observable<any>{
    const url = `${this.baseUrl}/api/v1/course/create-course`;
       console.log("baseUrl",this.baseUrl); 
   return  this.http.post(url,data);
               
  }


}
