import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layouts/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VideoListComponent } from './pages/video-list/video-list.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  //Site routes goes here 
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component:HomePage
  // },
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    // LayoutComponent,
    // AppHeaderComponent,
    // AppFooterComponent,
    // LoginModalComponent,
    // HomePage.
    VideoListComponent,
    DashboardComponent
  ],
  imports: [ 
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
