import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { State } from "./components/state/state";
 
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private state: State, private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let email;
    this.state.userEmail$.subscribe(value => email = value);    
    if(email) {      
      return true
    }    
    this.router.navigateByUrl('/');
    return false;
  }
}