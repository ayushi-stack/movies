import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/services/auth.service'
import { Router } from '@angular/router'
import { MessageService } from 'src/services/message.service'
import { UserContextService } from 'src/services/user-context.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePasswordField: boolean = true
  username: string = ''
  loginFailedMessage: boolean = false
  password: string = ''
  loading: boolean = false
  cols: number = 2
  theme: string | null = ''
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserContextService,
  ) {}

  ngOnInit(): void {
    this.cols = window.innerWidth <= 600 ? 1 : 2
    this.theme = this.userService.getTheme()
    this.messageService.getData().subscribe((response) => {
      console.log('Theme', response)
      if (response.type === 'theme') {
        this.theme = this.userService.getTheme()
        console.log('Theme', this.theme)
      }
    })
  }

  login() {
    console.log(this.username, this.password)
    this.loading = true
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        this.loading = false
        this.loginFailedMessage = false
        this.authService.setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        this.messageService.sendData({
          type: 'login',
          data: { status: 'S', message: 'Login Successful' },
        })
        this.router.navigate(['movies'])
      },
      (error) => {
        this.loading = false
        this.loginFailedMessage = true
        this.messageService.sendData({
          type: 'login',
          data: {
            status: 'F',
            message: 'Login Failed, Please try again later',
            error,
          },
        })
      },
    )
  }
  onSubmit(loginform: any) {
    console.log(loginform)
  }
  handleSize(event: any) {
    this.cols = event.target.innerWidth <= 600 ? 1 : 2
  }
}
