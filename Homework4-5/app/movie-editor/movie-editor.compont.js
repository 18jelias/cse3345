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
let MovieEditorComponent = class MovieEditorComponent {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
        this.movies = this.movieRepository.list();
    }
};
MovieEditorComponent = __decorate([
    core_1.Component({
        selector: 'movie-editor',
        templateUrl: './app/movie-list/movie-editor.html',
        styleUrls: ['./app/movie-list/movie-editor.css']
    }), 
    __metadata('design:paramtypes', [movie_repository_service_1.MovieRepositoryService])
], MovieEditorComponent);
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.compont.js.map