import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CourseComponent } from './components/course/course.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ConsolidateMarksheetComponent } from './consolidate-marksheet/consolidate-marksheet.component';
import { AllStudentsMarksheetComponent } from './components/all-students-marksheet/all-students-marksheet.component';
import { AssignTeacherComponent } from './components/assign-teacher/assign-teacher.component';
import { EnrollCourseComponent } from './components/enroll-course/enroll-course.component';
import { AssignMarksComponent } from './components/assign-marks/assign-marks.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'course', component: CourseComponent },
  { path: 'create-student', component: CreateStudentComponent },
  // { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course-details/:courseId', component: CourseDetailsComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'consolidate-marksheet', component: ConsolidateMarksheetComponent },
  { path: 'all-students-marksheet', component: AllStudentsMarksheetComponent },
  { path:'assign-teacher',component: AssignTeacherComponent},
  { path:'enroll-course',component: EnrollCourseComponent},
  { path:'assign-marks',component: AssignMarksComponent},
  { path: 'update-student/:studentId', component: UpdateStudentComponent },
  { path: 'update-teacher/:teacherId', component: UpdateTeacherComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
