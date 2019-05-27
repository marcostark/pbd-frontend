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
import { HttpClientModule } from '@angular/common/http';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ItemComponent } from './item/item.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EstabelecimentoComponent,
    ItemComponent,
    ProdutoComponent,    
  ],
  providers: [
    CCBST_INJECTABLES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
