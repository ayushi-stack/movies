import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, delay, Observable, of, throwError } from 'rxjs'
import { Movie } from 'src/app/model/movies'
import { AuthService } from './auth.service'

interface ErrorResponse {
  is_success: boolean
  error: any
}
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
      title: 'Spider Man',
      description:
        ' hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv sdj bsdjvsdjb sdjb sjdbamscbamscb amscbamscbamcbasjcbasjcbahmks',
      genres: ['romantic', 'comedy'],
      uuid: 1,
    },
    {
      title: 'The Exorcist',
      description: 'hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 2,
    },
    {
      title: 'Doctor Strange',
      description: 'hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 3,
    },
    {
      title: 'La La Land',
      description: 'hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 4,
    },
    {
      title: 'The Lord Of The Rings',
      description: 'hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjvr',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 5,
    },
    {
      title: 'Shawshank Redemption',
      description: 'hsdcbamsdcbam nvh sdcmsdbvsdfvbsfjvbskfdjvbsdkjvr',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 6,
    },
    {
      title: 'Veer Zaara',
      description: 'hsdcbamsdcbamsdcmsdbvsdfvbsfjvbskfdjvbsdkjv eer',
      genres: ['romantic', 'comedy', 'horror'],
      uuid: 7,
    },
  ]

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMovies(): Observable<MovieResponse | ErrorResponse> {
    // return this.http
    //   .get<MovieResponse | ErrorResponse>(
    //     'https://demo.credy.in/api/v1/maya/movies/',
    //     {
    //       headers: new HttpHeaders().set(
    //         'Authorization',
    //         `Token ${this.authService.getToken()}`,
    //       ),
    //     },
    //   )
    //   .pipe(
    //     catchError(
    //       (err: ErrorResponse): Observable<ErrorResponse> => {
    //         console.log('error caught in service')
    //         console.error(err)
    //         //Handle the error here
    //         return throwError(err) //Rethrow it back to component
    //       },
    //     ),
    //   )
    // Creating Fake Http since original is not coming
    return of({
      count: 10,
      next: '',
      previous: '',
      data: this.movies,
    }).pipe(delay(1000))
  }
  getAvatar(imageUrl: string): Observable<Blob> {
    console.log(imageUrl)
    return this.http.get(imageUrl, { responseType: 'blob' })
  }
}
