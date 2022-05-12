import { Component, Input, OnInit } from '@angular/core'
import { Movie } from 'src/app/model/movies'
import { MoviesService } from 'src/services/movie.service'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie | undefined
  modalMovie: Movie | undefined
  imageToShow: any

  constructor(private moviesService: MoviesService) {
    console.log(this.movie?.title)
  }
  ngOnInit(): void {
    let imageUrl = `https://ui-avatars.com/api/?name=${this.movie?.title}&background=random&size=256&rounded=true`
    this.moviesService.getAvatar(imageUrl).subscribe((data) => {
      this.imageToShow = data.type

      console.log(data)
      let reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          this.imageToShow = reader.result
        },
        false,
      )
      reader.readAsDataURL(data)
    })
  }
  showModal(movie: any) {
    this.modalMovie = movie
    console.log('Clocked', this.modalMovie)
    //document.querySelector('.modal')?.classList.toggle('hidden')
    console.log(document.querySelector('.modal'))
  }
}
