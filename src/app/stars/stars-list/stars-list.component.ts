import { Component, OnInit } from '@angular/core';
import { Star } from 'src/app/core/classes/star';
import { StarService } from 'src/app/core/services/stars.service';

@Component({
  selector: 'app-stars-list',
  templateUrl: './stars-list.component.html',
  styleUrls: ['./stars-list.component.css']
})
export class StarsListComponent implements OnInit {
  public stars: Star[] = <Star[]>[];
  public message: string = '';
  
  constructor(private starService: StarService) { }

  ngOnInit() {
    this.fetchStars();
  }

  private fetchStars() {
    this.starService.fetchStars({}).subscribe((stars: Star[]) => {
      this.stars = stars;
    }, (err) => {
      console.log(err);
    });
  }

}
 