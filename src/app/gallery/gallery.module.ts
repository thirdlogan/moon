import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import { RouterModule } from '@angular/router';

const galleryRoutes = [
  {
    path: 'pics',
    component: PictureGalleryComponent,
  },
];

@NgModule({
  declarations: [PictureGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes),
  ]
})
export class GalleryModule { }
