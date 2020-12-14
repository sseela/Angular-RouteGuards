import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {

  constructor(){}
  canLoad(route: Route):boolean {
    if(route.path === 'loadingLazily') {
      
      return true;
    }
    return false;
  }
}
