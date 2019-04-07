import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import { RouterModule } from '@angular/router';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

const galleryRoutes = [
  {
    path: 'pics',
    component: PictureGalleryComponent,
  },
  {
    path: 'vids',
    component: VideoGalleryComponent,
  }
];

@NgModule({
  declarations: [PictureGalleryComponent, VideoGalleryComponent],
  entryComponents: [PictureGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes),
  ]
})
export class GalleryModule { }
