import { Component, OnInit, Output } from '@angular/core'
import { UserContextService } from 'src/services/user-context.service'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  theme: string | undefined
  @Output() onToggle: EventEmitter<any> = new EventEmitter()
  constructor(private userServiceService: UserContextService) {
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
}
