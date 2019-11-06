import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

export interface Movie {
  name: string;
  director: string;
  year: number;
  cast: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  // private apiKey: string  = '1f02d4e8';
  // private url: string     = 'http://www.omdbapi.com?apikey=' + this.apiKey;
  private url: string = 'http://localhost:3000/movie/'

  constructor(private http: HttpClient) { }

  getMovie(name: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + name);
  }
}
