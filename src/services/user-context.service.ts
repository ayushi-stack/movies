import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  theme: string = 'light'

  setTheme(theme: string) {
    this.theme = theme
  }

  getTheme() {
    return this.theme
  }
}
