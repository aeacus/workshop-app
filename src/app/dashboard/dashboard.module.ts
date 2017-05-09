import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';

import { VideoListService } from '../video-list.service'

const dashboardRoutes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' }
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [VideoListService],
  declarations: [DashboardComponent, VideoListComponent, VideoViewerComponent, StatFiltersComponent]
})
export class DashboardModule { }
