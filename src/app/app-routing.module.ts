import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CanIActivGuard } from './can-iactiv.guard';
import { LoginComponent } from './login/login.component';
import { CanDeActivateGuard } from './can-de-activate.guard';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ActivateChildGuard } from './activate-child.guard';
import { LoadGuard } from './load.guard';

const routes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: FirstComponent, canActivate: [CanIActivGuard], canActivateChild: [ActivateChildGuard],
  children: [{path: 'one/:string', component: OneComponent},
             {path: 'two/:id', component: TwoComponent}]},

  {path: 'second', component: SecondComponent, canDeactivate: [CanDeActivateGuard]},
  {path: 'login', component: LoginComponent},

  {path: 'loadingLazily', loadChildren: 'src/app/feature/feature.module#FeatureModule', canLoad: [LoadGuard]},
  {path: '**', redirectTo: 'first', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
