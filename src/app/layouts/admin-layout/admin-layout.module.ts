import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { MarcaComponent } from '../../marca/marca.component';
import { MedidaComponent } from '../../medida/medida.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { MarcaModule } from 'app/marca/marca.module';
import { MedidaModule } from 'app/medida/medida.module';
import { TipoEstabelecimentoComponent } from 'app/tipo-estabelecimento/tipo-estabelecimento.component';
import { TipoEstabelecimentoModule } from 'app/tipo-estabelecimento/tipo-estabelecimento.module';
import { TipoProdutoModule } from 'app/tipo-produto/tipo-produto.module';
import { LocalModule } from 'app/local/local.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MarcaModule,
    MedidaModule,
    TipoEstabelecimentoModule,
    TipoProdutoModule,
    LocalModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,    

  ]
})

export class AdminLayoutModule {}
