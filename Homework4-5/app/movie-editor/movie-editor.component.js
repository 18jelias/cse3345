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
const router_1 = require('@angular/router');
const movie_repository_service_1 = require('../repositories/movie-repository.service');
let MovieEditorComponent = class MovieEditorComponent {
    constructor(route, router, movieRepository) {
        this.route = route;
        this.router = router;
        this.movieRepository = movieRepository;
        this.movies = this.movieRepository.list();
        this.title = "New Movie";
        this.years = Array(50).fill(0).map((x, i) => (new Date().getFullYear() - i));
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            if (params['id'] !== undefined) {
                this._temp = this.movieRepository.get(+params['id']);
                this.title = this._temp.title.toString();
                this.update = true;
            }
            else {
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
        if (this._temp.imagePath === "") {
            this._temp.imagePath = "images/blank.jpg";
        }
        if (this._temp.title === "") {
            this._temp.title = "No title given";
        }
        if (this._temp.year === "") {
            this._temp.year = "No year given";
        }
        if (this.update) {
            this.movieRepository.update(this._temp);
        }
        else {
            this.movieRepository.add(this._temp);
        }
        this.router.navigateByUrl('/');
    }
};
MovieEditorComponent = __decorate([
    core_1.Component({
        selector: 'movie-editor',
        templateUrl: './app/movie-editor/movie-editor.html',
        styleUrls: ['./app/movie-editor/movie-editor.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, movie_repository_service_1.MovieRepositoryService])
], MovieEditorComponent);
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.component.js.map