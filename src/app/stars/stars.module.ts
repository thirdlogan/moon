import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsListComponent } from './stars-list/stars-list.component';
import { Routes, RouterModule } from '@angular/router';
import { StarSiteComponent } from './star-site/star-site.component';

const routes: Routes = [
  {
    path: 'stars-list',
    component: StarsListComponent,
  }
];


@NgModule({
  declarations: [
    StarsListComponent,
    StarSiteComponent
  ],
  entryComponents: [
    StarsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StarsModule { }
