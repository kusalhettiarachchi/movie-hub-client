import { Component } from '@angular/core';
import { Movie, MovieServiceService} from "./movie-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-hub';
  titles = ['batman', 'spiderman', 'mission impossible'];
  movies: Movie[];

  constructor(private movieService: MovieServiceService) {
    let res;
    this.titles.forEach((title) => {
      res = movieService.getMovie(title);
      this.movies.push(res);
    });
    console.log("movie list");
    console.log(this.movies);
  }
}
