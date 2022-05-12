import { Component } from '@angular/core'
import { UserContextService } from 'src/services/user-context.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: string | undefined

  constructor(private userServiceService: UserContextService) {
    this.theme = this.userServiceService.getTheme()
  }

  toggleMode() {
    this.theme === 'light' ? this.setTheme('dark') : this.setTheme('light')
  }

  setTheme(mode: string) {
    this.theme = mode
    this.userServiceService.setTheme(mode)
  }
}
