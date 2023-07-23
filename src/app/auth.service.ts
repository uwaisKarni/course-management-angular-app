import { Injectable } from '@angular/core';
import { AdminService } from './Service/admin.service';
import { AngularFireAuth} from '@angular/fire/auth'
import firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userEmail:any;
  constructor(private adminService:AdminService,private fireAuth:AngularFireAuth,private router:Router) { }
  
 //login
   
  login (email:string,password:string){
 
     this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
       localStorage.setItem('token','true');
       this.router.navigate(['/home']);
     },err =>{
        alert('Something went wrong');
        this.router.navigate(['/login']);
     })

  }

   // register method
   register(email : string, password : string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
     // this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
  
 async googleSignIn(){
    try {
      const result = await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(result.user?.uid));
      // The user is signed in, and you can access user data from `result.user`
    } catch (error) {
      // Handle authentication errors here
      alert('Error signing in with Google:');
      console.error('Error signing in with Google:', error);
    }
  } 
  // return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res => {

    //   this.router.navigate(['/home']);
    //   localStorage.setItem('token',JSON.stringify(res.user?.uid));

    // }, err => {
    //   alert(err.message);
    // })
 
  forgotPassword(email : string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong');
    })
}

sendEmailForVarification(user:any){
  user.sendEmailForVarification().then((res: any) =>{
    this.router.navigate(['/verify-email']);
  },res =>{
     alert('Something went wrong');
  })
}
 async isRoleAdmin() : Promise<boolean> {

 this.userEmail = await this.getCurrentUserEmail();
  console.log('User Email:', this.userEmail);

  if (this.userEmail === 'muwais5599@gmail.com') {
    console.log(this.userEmail, 'Role Is Admin');
    return true;
  }

  return false;
 
  // this.getCurrentUserEmail().then((email) => {
  //   this.userEmail = email;
  //   console.log('User Email:',this.userEmail)
  //   if (this.userEmail === 'muwais5599@gmail.com') {
  //     console.log(this.userEmail,'Role Is Admin')
  //     return true;
  //   }   
  // });
  // return false;
 }


 getCurrentUserEmail(): Promise<string> {
  return new Promise((resolve, reject) => {
    this.fireAuth.authState.subscribe((user: firebase.User | null) => {
      if (user) {
        resolve(user.email);
      } else {
        resolve(null);
      }
    });
  });
}

}
