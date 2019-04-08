import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import { RouterModule } from '@angular/router';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { MediaFileDetailsComponent } from './media-file-details/media-file-details.component';

const galleryRoutes = [
  {
    path: 'pics',
    component: PictureGalleryComponent,
  },
  {
    path: 'vids',
    component: VideoGalleryComponent,
  },
  {
    path: 'details',
    component: MediaFileDetailsComponent,
  }
];

@NgModule({
  declarations: [PictureGalleryComponent, VideoGalleryComponent, MediaFileDetailsComponent],
  entryComponents: [PictureGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes),
  ]
})
export class GalleryModule { }
