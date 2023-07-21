import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   //'<button (click)="redirectToAdminModule()">Go to Admin</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'course-management';
 
}
