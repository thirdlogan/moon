import { Component, OnInit } from '@angular/core';
import { MediaFile } from 'src/app/core/classes/media-file';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.css']
})
export class PictureGalleryComponent implements OnInit {
  public pics: MediaFile[] = <MediaFile[]>[];
  public message: string;
  
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    let search: any = {
      mediaTypeCode: 'pic',
    };

    this.galleryService.fetchMediaFiles(search).subscribe((mediaFiles: MediaFile[]) => {
      this.pics = mediaFiles;

      if (this.pics.length < 1) {
        this.message = 'No videos found.';
      }
    }, (err) => {
      console.log(err);
    })
  }

}
