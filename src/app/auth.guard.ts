import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAdmin;
  constructor(private authService : AuthService){}

  async canActivate(){
    this.isAdmin = await this.authService.isRoleAdmin() ;
    console.log("Is Admin",this.isAdmin);
  if(this.isAdmin){
    console.log("admin authenticated");
    return true;
  }else{
    window.alert("you do not have sufficient permissions to access this admin page");
    return false;
  }
  }

  
}
