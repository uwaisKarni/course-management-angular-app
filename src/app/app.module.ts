import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CourseComponent } from './components/course/course.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CreateStudentService } from './Service/create-student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminService } from './Service/admin.service';
import { TeacherService } from './Service/teacher.service';
import { CourseService } from './Service/course.service';
import { ConsolidateMarksheetComponent } from './consolidate-marksheet/consolidate-marksheet.component';
import { AllStudentsMarksheetComponent } from './components/all-students-marksheet/all-students-marksheet.component';
import { AssignTeacherComponent } from './components/assign-teacher/assign-teacher.component';
import { EnrollCourseComponent } from './components/enroll-course/enroll-course.component';
import { AssignMarksComponent } from './components/assign-marks/assign-marks.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    CreateStudentComponent,
    HomeComponent,
    CourseDetailsComponent,
    AddTeacherComponent,
    AddCourseComponent,
    ConsolidateMarksheetComponent,
    AllStudentsMarksheetComponent,
    AssignTeacherComponent,
    EnrollCourseComponent,
    AssignMarksComponent,
    UpdateStudentComponent,
    UpdateTeacherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CreateStudentService,AdminService,TeacherService,CourseService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
