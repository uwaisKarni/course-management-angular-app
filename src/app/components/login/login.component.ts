import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private router: Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }
  
  
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Redirect to admin page or perform admin-specific actions
      console.log('Admin login successful');
       this.adminService.setUsername(this.username);
      this.router.navigate(['/home']);
    } else if (this.username === 'user' && this.password === 'user') {
      // Redirect to user page or perform user-specific actions
      console.log('User login successful');
      this.adminService.setUsername(this.username);
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid username or password');
      window.alert("Invalid username or password");
    }
  }


}
