import { Component, OnInit } from '@angular/core';
import { MediaFile } from '../../core/classes/media-file';
import { GalleryService } from '../../core/services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  public vids: MediaFile[] = <MediaFile[]>[];
  public message: string;
  public vidServerUri: string = 'http://localhost:8000';

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    let search: any = {
      mediaTypeCode: 'vid',
    };

    this.galleryService.fetchMediaFiles(search).subscribe((mediaFiles: MediaFile[]) => {
      this.vids = mediaFiles;

      if (this.vids.length < 1) {
        this.message = 'No videos found.';
      }
    }, (err: any) => {
      console.log(err);
    });
  }

  public showVidDetails(vid: MediaFile): void {
    this.galleryService.currentMediaFile = vid;
    this.router.navigateByUrl('/gallery/details');
  }
}
