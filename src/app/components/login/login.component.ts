import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private router: Router,private adminService:AdminService,private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  
  // log() {
  //   if (this.email === 'admin' && this.password === 'admin') {
  //     // Redirect to admin page or perform admin-specific actions
  //     console.log('Admin login successful');
  //      this.adminService.setUsername(this.email);
  //     this.router.navigate(['/home']);
  //   } else if (this.email === 'user' && this.password === 'user') {
  //     // Redirect to user page or perform user-specific actions
  //     console.log('User login successful');
  //     this.adminService.setUsername(this.email);
  //     this.router.navigate(['/home']);
  //   } else {
  //     console.log('Invalid username or password');
  //     window.alert("Invalid username or password");
  //   }
  // }

  login(){
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.authService.login(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }


signInWithGoogle() {
  this.authService.googleSignIn();
}

}