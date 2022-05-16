import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Movie } from 'src/app/model/movies'
import { MessageService } from 'src/services/message.service'
import { MoviesService } from 'src/services/movie.service'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'
import { MovieModalComponent } from '../../movie-modal/movie-modal.component'
import { UserContextService } from 'src/services/user-context.service'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie | undefined
  modalMovie: Movie | undefined
  imageToShow: any
  theme: string | null = ''

  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService,
    private dialog: MatDialog,
    private userContextService: UserContextService,
  ) {}

  ngOnInit(): void {
    this.getAvatars()
    this.theme = this.userContextService.getTheme()
    this.messageService.getData().subscribe((response) => {
      if (response.type === 'theme') {
        this.theme = this.userContextService.getTheme()
      }
    })
  }

  getAvatars() {
    let imageUrl = `https://ui-avatars.com/api/?name=${this.movie?.title}&background=random&size=128`
    this.moviesService.getAvatar(imageUrl).subscribe((data) => {
      this.imageToShow = data.type
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

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieModalComponent, {
      width: '25%',
      data: {
        img: this.imageToShow,
        title: this.movie?.title,
        description: this.movie?.description,
        genres: this.movie?.genres,
      },
      backdropClass: 'modal-backdrop',
      panelClass: this.theme ? this.theme : '',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed')
      // this.animal = result;
    })
  }
}
