import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService : AuthService){}

  canActivate(){
     
  if(this.authService.isRoleAdmin()){
    return true;
  }else{
    window.alert("you do not have sufficient permissions to access this admin page");
    return false;
  }
  }

  
}
