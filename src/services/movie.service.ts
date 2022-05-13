import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Movie } from 'src/app/model/movies'
import { AuthService } from './auth.service'

interface MovieResponse {
  count: number
  next: string
  previous: string
  data: any
}
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      title: 'Jab tak hai jaan',
      description:
        'nice movie deer hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv sdj bsdjvsdjb sdjb sjdbamscbamscb amscbamscbamcbasjcbasjcbahmks',
      genres: ['romantic', 'comedy'],
      uuid: 1,
    },
    {
      title: 'Veer Zaara',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 2,
    },
    {
      title: 'Manmarziyan',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 3,
    },
    {
      title: 'La La Land',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 4,
    },
    {
      title: 'Veer Zaara',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 5,
    },
    {
      title: 'Veer Zaara',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 6,
    },
    {
      title: 'Veer Zaara',
      description: 'Cry movie deer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 7,
    },
  ]

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      'https://demo.credy.in/api/v1/maya/movies/',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Token ${this.authService.getToken()}`,
        ),
      },
    )
    // Creating Fake Http since original is not coming
    /*  return of({
      count: 10,
      next: '',
      previous: '',
      data: this.movies,
    }).pipe(delay(1000)) */
  }
  getAvatar(imageUrl: string): Observable<Blob> {
    console.log(imageUrl)
    return this.http.get(imageUrl, { responseType: 'blob' })
  }
}
