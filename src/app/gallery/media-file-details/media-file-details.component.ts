import { Component, OnInit } from '@angular/core';
import { MediaFile } from 'src/app/core/classes/media-file';
import { GalleryService } from 'src/app/core/services/gallery.service';
import { Router } from '@angular/router';
import { StarService } from 'src/app/core/services/stars.service';
import { Star } from 'src/app/core/classes/star';


@Component({
  selector: 'app-media-file-details',
  templateUrl: './media-file-details.component.html',
  styleUrls: ['./media-file-details.component.css']
})
export class MediaFileDetailsComponent implements OnInit {
  public mediaFile: MediaFile = new MediaFile();
  public starName: string = '';

  constructor(private router: Router, private galleryService: GalleryService, private starService: StarService) { }

  ngOnInit() {
    this.mediaFile = <MediaFile>Object.assign({}, this.galleryService.currentMediaFile);

    if (!this.mediaFile.mediaFileId) {
      this.router.navigateByUrl('/gallery/pics');
      return;
    }

    this.mediaFile.uri = 'http://localhost:8000' + this.mediaFile.uri;

    this.starService.fetchStar({ starId: this.mediaFile.starId }).subscribe((star: Star) => {
      this.starName = star.name;
    }, (err: any) => {
      console.log(err);
    });
  }
}
