import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

const appRoutes: Routes = [
  {path: 'lazy', component: LazyComponent}
]

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    NgxSpinnerModule
  ]
})
export class FeatureModule { }
