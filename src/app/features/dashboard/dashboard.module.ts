import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {StudentsModule} from './students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    HomeComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    CommonModule,
    DashboardRoutingModule,
    StudentsModule,
    SharedModule,
],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
export class ToolbarMultirowExample {}