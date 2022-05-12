import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { LoginComponent } from './components/login/login.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { EllipsisModule } from 'ngx-ellipsis'
import { MatButtonModule } from '@angular/material/button'
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MovieItemComponent } from './components/movies-list/movie-item/movie-item.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    EllipsisModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
