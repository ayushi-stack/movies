import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { UserContextService } from 'src/services/user-context.service'
import { EventEmitter } from '@angular/core'
import { MessageService } from 'src/services/message.service'
import { AuthService } from 'src/services/auth.service'
import { Router } from '@angular/router'
import { debounceTime, filter, fromEvent, map } from 'rxjs'
import { MatSlideToggle } from '@angular/material/slide-toggle'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('searchInput', { static: false, read: ElementRef })
  searchInputElement: any
  @ViewChild('slideToggle', { static: true })
  slideToggle!: MatSlideToggle
  theme: string | null = ''
  token: string = ''
  @Output() onToggle: EventEmitter<any> = new EventEmitter()
  constructor(
    private userService: UserContextService,
    private messageService: MessageService,
    private authService: AuthService,
    private cdREf: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.theme = this.userService.getTheme()
    this.token = this.authService.getToken()
    if (localStorage.getItem('theme') === 'dark') {
      console.log('Dark')
      this.slideToggle.toggle()
    }
    this.messageService.getData().subscribe((response: any) => {
      if (response.type === 'login' || response.type === 'logout') {
        this.token = this.authService.getToken()
        this.cdREf.detectChanges()
        this.debounceSearch()
      }
    })
  }
  toggleMode() {
    this.theme === 'light' ? this.setTheme('dark') : this.setTheme('light')
    this.messageService.sendData({
      type: 'theme',
      data: {
        theme: this.theme,
      },
    })
    this.onToggle.emit(this.theme)
  }

  setTheme(mode: string) {
    this.theme = mode
    this.userService.setTheme(mode)
  }

  logout() {
    this.authService.logout()
  }

  debounceSearch() {
    console.log(this.searchInputElement.nativeElement)
    fromEvent(this.searchInputElement.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value
        }),
        filter((res) => res.length > 3),
        debounceTime(250),
      )
      .subscribe((text: string) => {
        console.log('Searched', text)
        this.messageService.sendData({
          type: 'search',
          data: text,
        })
      })
  }
}
