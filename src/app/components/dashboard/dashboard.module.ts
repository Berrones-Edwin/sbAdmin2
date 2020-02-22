import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, ButtonsComponent, CardsComponent, ColorsComponent, BordersComponent, AnimationsComponent, OtherComponent, ChartsComponent, TableComponent, Page404Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
