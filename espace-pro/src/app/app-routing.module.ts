
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
        remoteEntry: "manifest",
        remoteName: "remoteApp",
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
  loadComponent: () =>
    loadRemoteModule({
      remoteEntry: "manifest",
      remoteName: "remoteApp",
      exposedModule: "./LoginComponent"
    })
    .then(m => m.LoginComponent)
    .catch(err => {
      console.error('Error loading component:', err);
      alert('Error loading component: ' + JSON.stringify(err, null, 2));
    })
},
{
  path: 'cart',
  loadComponent: () =>
    loadRemoteModule({
      remoteEntry: "manifest",
      remoteName: "remoteApp",
      exposedModule: "./CartComponent"
    })
    .then(m => m.CartComponent)
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
