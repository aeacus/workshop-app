import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const dashboardRoutes: Route[] = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: []
})
export class DashboardModule { }
