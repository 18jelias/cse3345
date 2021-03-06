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
let MovieRepositoryService = class MovieRepositoryService {
    constructor() {
        this._movies = [];
        this._movies.push({ id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg' });
        this._movies.push({ id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg' });
        this._movies.push({ id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg' });
    }
    getIndex(id) {
        for (var i = this._movies.length; i--;) {
            var movie = this._movies[i];
            if (movie.id == id)
                return i;
        }
        return -1;
    }
    list() {
        return this._movies;
    }
    get(id) {
        var index = this.getIndex(id);
        return this._movies[index];
    }
    add(movie) {
        movie.id = this._movies.length + 1;
        this._movies.push(movie);
    }
    update(movie) {
        var index = this.getIndex(movie.id);
        this._movies[index] = movie;
    }
    delete(id) {
        var index = this.getIndex(id);
        this._movies.splice(index, 1);
    }
};
MovieRepositoryService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], MovieRepositoryService);
exports.MovieRepositoryService = MovieRepositoryService;
//# sourceMappingURL=movie-repository.service.js.map