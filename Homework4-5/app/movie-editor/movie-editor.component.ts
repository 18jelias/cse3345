import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieRepositoryService } from '../repositories/movie-repository.service';

@Component({
  selector: 'movie-editor',
  templateUrl: './app/movie-editor/movie-editor.html',
  styleUrls: [ './app/movie-editor/movie-editor.css' ]
})

export class MovieEditorComponent { 
	movies : any[];
	_temp : {imagePath: string, title: string, year: string};
	title : string;
	update : boolean;
	years : any[];

	constructor(private route: ActivatedRoute,
							private router: Router,
							private movieRepository : MovieRepositoryService){
		this.movies = this.movieRepository.list();
		this.title = "New Movie";
		this.years = Array(50).fill(0).map((x, i) => (new Date().getFullYear() - i));
	}
	ngOnInit() {
		this.route.params.forEach((params: Params) => {

			if(params['id'] !== undefined) {
				this._temp = this.movieRepository.get(+params['id']);
				this.title = this._temp.title.toString();	
				this.update = true;
				
			} else {
				this._temp = {
					imagePath: "",
					title: "",
					year: "" 
				};
				this.update = false;
				this.title = 'New Movie';
			}
		});
	}

		save() {
			if(this._temp.imagePath === "") {
				this._temp.imagePath = "images/blank.jpg";
			}
			if(this._temp.title === "") {
				this._temp.title = "No title given";
			}
			if(this._temp.year === "") {
				this._temp.year = "No year given";
			}
			if(this.update) {
				this.movieRepository.update(this._temp);
			} else{
				this.movieRepository.add(this._temp);
			}
			this.router.navigateByUrl('/');
	}
}