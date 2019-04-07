import { Component, OnInit } from '@angular/core';
import { MediaFile } from '../../core/classes/media-file';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  public vids: MediaFile[] = <MediaFile[]>[];
  public message: string;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    let search: any = {
      mediaTypeCode: 'vid',
    };

    this.galleryService.fetchMediaFiles(search).subscribe((mediaFiles: MediaFile[]) => {
      this.vids = mediaFiles;

      if (this.vids.length < 1) {
        this.message = 'No videos found.';
      }
    }, (err) => {
      console.log(err);
    })
  }
}
