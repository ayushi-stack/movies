import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  theme: string = 'light'

  setTheme(theme: string) {
    localStorage.setItem('theme', theme)
    this.theme = theme
  }

  getTheme() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    } else {
      return this.theme
    }
  }
}
