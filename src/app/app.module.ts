import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { CCBST_INJECTABLES } from './app.injectables';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { LoginModule } from './login/login.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule} from '@angular/material';
import { ErrorInterceptorProvider } from './_helpers/error.interceptor';
import { StorageService } from './services/storage.service';
import { AuthInterceptorProvider } from './_helpers/auth.interceptor';
import { RecuperarSenhaModule } from './recuperar-senha/recuperar-senha.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RecuperarSenhaModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    LoginModule,
    MatDialogModule,
    MatSelectModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxt5tbKRFSQ0i6MnvcHqcpsybpPIe2n90'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ConfirmationDialogComponent,
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    CCBST_INJECTABLES,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    StorageService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
