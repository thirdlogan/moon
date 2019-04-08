import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Star } from '../classes/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  private endpointUri: string = 'http://localhost:8000/app/ws/star.php'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  public fetchStars(search: any): Observable<Star[]> {
    search['action'] = 'fetch-stars'
    return this.http.post<Star[]>(this.endpointUri, search, this.httpOptions);
  }

  public fetchStar(search: any) {
    search['action'] = 'fetch-star'
    return this.http.post<Star[]>(this.endpointUri, search, this.httpOptions);

  }
}
