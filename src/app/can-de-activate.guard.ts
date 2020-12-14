import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeActivateGuard implements CanDeactivate<SecondComponent> {
  canDeactivate(component: SecondComponent): boolean {
     if(component.sampleForm.dirty) {
       return confirm("are you sure");
     }
     return true;
  }
}
