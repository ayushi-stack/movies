import { Component, OnInit, Output } from '@angular/core'
import { UserContextService } from 'src/services/user-context.service'
import { EventEmitter } from '@angular/core'
import { MessageService } from 'src/services/message.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  theme: string | undefined
  @Output() onToggle: EventEmitter<any> = new EventEmitter()
  constructor(
    private userServiceService: UserContextService,
    private messageService: MessageService,
  ) {
    this.theme = this.userServiceService.getTheme()
  }

  toggleMode() {
    this.theme === 'light' ? this.setTheme('dark') : this.setTheme('light')
    this.onToggle.emit(this.theme)
  }

  setTheme(mode: string) {
    this.theme = mode
    this.userServiceService.setTheme(mode)
  }

  searchKeyChanged(event: any) {
    const value = event.target.value
    this.messageService.sendData({
      type: 'search',
      data: value,
    })
  }
}
