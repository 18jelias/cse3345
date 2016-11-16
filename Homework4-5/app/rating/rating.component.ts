import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './app/rating/rating.component.html',
})

export class RatingComponent { 
    @Input() model: any; 

}