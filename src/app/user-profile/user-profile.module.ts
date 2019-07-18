import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from './user-profile.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserProfileService,
  ]

})
export class UserProfileModule { }
