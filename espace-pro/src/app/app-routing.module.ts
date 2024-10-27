
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : '' , redirectTo : '/Home' , pathMatch : 'full' },
  {
    path: 'Home',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: "home",
        remoteName: "homeApp",
        exposedModule: "./HomeModule"
      })
      .then(m => m.HomeModule)
      .catch(err => {
        console.error('Error loading component:', err);
        alert('Error loading component: ' + JSON.stringify(err, null, 2));
      })
 },
 {
  path: 'login',
  loadChildren: () =>
    loadRemoteModule({
      remoteEntry: "manifest",
      remoteName: "loginApp",
      exposedModule: "./LoginModule"
    })
    .then(m => m.LoginModule)
    .catch(err => {
      console.error('Error loading component:', err);
      alert('Error loading component: ' + JSON.stringify(err, null, 2));
    })
},
{
  path: 'cart',
  loadChildren: () =>
    loadRemoteModule({
      remoteEntry: "manifest",
      remoteName: "cartApp",
      exposedModule: "./CartModule"
    })
    .then(m => m.CartModule)
    .catch(err => {
      console.error('Error loading component:', err);
      alert('Error loading component: ' + JSON.stringify(err, null, 2));
    })
},
{
  path: 'employee-home',
component: DashboardComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
