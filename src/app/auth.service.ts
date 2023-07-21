import { Injectable } from '@angular/core';
import { AdminService } from './Service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private adminService:AdminService) { }

 isRoleAdmin(){
  const username = this.adminService.getUsername();
  console.log("user name ::",this.adminService.getUsername())
  if(username === 'admin'){
  return true;
  }else{
    return false;
  }
 }

}
