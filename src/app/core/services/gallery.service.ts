import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaFile } from '../classes/media-file';

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
  
  constructor(private http: HttpClient) { }

  public fetchPics(search: any): Observable<MediaFile[]> {
    search['action'] = 'fetch-recent-media-files';
    
    return this.http.post<MediaFile[]>(this.endpointUri, search, this.httpOptions);
  }
}
