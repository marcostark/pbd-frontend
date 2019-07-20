import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'user-profile',   component: UserProfileComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class NavbarRoutingModule { }
