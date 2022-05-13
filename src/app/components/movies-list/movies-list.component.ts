import { Component, OnInit } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { MessageService } from 'src/services/message.service'
import { MoviesService } from 'src/services/movie.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  searchKey: string = ''
  movies: any
  error: boolean = false
  loading: boolean = false
  length = 100
  pageSize = 10
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: unknown
  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.getMovies()
    this.messageService.getData().subscribe((response: any) => {
      if (response.type === 'search') {
        this.searchKey = response.data
      }
    })
  }

  refresh() {
    this.getMovies()
  }

  getMovies() {
    this.loading = true
    this.error = false
    this.moviesService.getMovies().subscribe((response) => {
      if (response && response.data && response.data.length >= 0) {
        this.movies = response.data
        this.error = false
      } else {
        this.error = true
      }
      this.loading = false
    })
  }
}
