"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const movie_repository_service_1 = require('../repositories/movie-repository.service');
let MovieListComponent = class MovieListComponent {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
        this.title = "Movie Database";
        this.movies = this.movieRepository.list();
    }
};
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movie-list',
        templateUrl: './app/movie-list/movie-list.html',
        styleUrls: ['./app/movie-list/movie-list.css']
    }), 
    __metadata('design:paramtypes', [movie_repository_service_1.MovieRepositoryService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map