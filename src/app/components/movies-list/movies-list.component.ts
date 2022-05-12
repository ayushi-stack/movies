import { Component, OnInit } from '@angular/core'
import { Movie } from 'src/app/model/movies'
import { MessageService } from 'src/services/message.service'
import { MoviesService } from 'src/services/movie.service'
import { MovieItemComponent } from './movie-item/movie-item.component'
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  searchKey: string = ''
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

  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    console.log('Movies called')
    this.moviesService.getMovies().subscribe((data) => {
      console.log('Data', data)
    })
    this.messageService.getData().subscribe((response: any) => {
      this.searchKey = response.data
    })
  }
}
