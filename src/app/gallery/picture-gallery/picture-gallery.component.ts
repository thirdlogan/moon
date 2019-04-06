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

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.fetchPics({}).subscribe((mediaFiles: MediaFile[]) => {
      this.pics = mediaFiles;
    }, (err) => {
      console.log(err);
    })
  }

}
