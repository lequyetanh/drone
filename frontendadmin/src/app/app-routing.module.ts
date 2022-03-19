import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneManagerComponent } from './drone-manager/drone-manager.component';
import { LoginComponent } from './login/login.component';
import { FollowingComponent } from './following/following.component';
import { AllDroneComponent } from './all-drone/all-drone.component';

const routes: Routes = [
  {
    path: "home/:id",
    component: DroneManagerComponent,
  },
  {
    path: "user/following/:id",
    component: FollowingComponent,
  },
  {
    path: "allDrone",
    component: AllDroneComponent,
  },
  {
    path: "",
    component: AllDroneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
