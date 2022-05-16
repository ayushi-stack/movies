import { Component } from '@angular/core'
import { MessageService } from 'src/services/message.service'
import { UserContextService } from 'src/services/user-context.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: string | null

  constructor(
    private userServiceService: UserContextService,
    private messageService: MessageService,
  ) {
    this.theme = this.userServiceService.getTheme()
  }

  toggleMode() {
    this.theme === 'light' ? this.setTheme('dark') : this.setTheme('light')
  }

  setTheme(mode: string) {
    this.theme = mode
    this.userServiceService.setTheme(mode)
  }
  toggleClicked(data: any) {
    this.theme = data
    console.log(data)
  }
}
