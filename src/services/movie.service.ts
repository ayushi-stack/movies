import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Movie } from 'src/app/model/movies'
import { LoginService } from './login.service'

interface MovieResponse {
  count: number
  next: string
  previous: string
  data: Movie[]
}
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      'https://demo.credy.in/api/v1/maya/movies/',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Token ${this.loginService.getToken()}`,
        ),
      },
    )
  }
  getAvatar(imageUrl: string): Observable<Blob> {
    console.log(imageUrl)
    return this.http.get(imageUrl, { responseType: 'blob' })
  }
}
