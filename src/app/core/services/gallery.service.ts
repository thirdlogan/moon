import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaFile } from '../classes/media-file';
import { MediaSet } from '../classes/media-set';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private endpointUri: string = 'http://localhost:8000/app/ws/gallery.php'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public currentMediaSet: MediaSet = new MediaSet();
  public currentMediaFile: MediaFile = new MediaFile();
  
  constructor(private http: HttpClient) { }

  public fetchMediaFiles(search: any): Observable<MediaFile[]> {
    search['action'] = 'fetch-recent-media-files';
    
    return this.http.post<MediaFile[]>(this.endpointUri, search, this.httpOptions);
  }
}
