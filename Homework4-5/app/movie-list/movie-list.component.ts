import { Component } from '@angular/core';
import { MovieRepositoryService } from '../repositories/movie-repository.service';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'movie-list',
  templateUrl: './app/movie-list/movie-list.html',
  styleUrls: [ './app/movie-list/movie-list.css' ]
})

export class MovieListComponent { 
	movies : any[];
	title : string;

	constructor(private movieRepository : MovieRepositoryService){
		this.title = "Movie Database";
		this.movies = this.movieRepository.list();
	}
}