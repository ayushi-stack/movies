import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/services/login.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

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
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.username, this.password)
    this.loginService.login(this.username, this.password).subscribe(
      (response: any) => {
        this.loginFailedMessage = false
        console.log('Login Successful', response.data)
        this.loginService.setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        this.router.navigate(['movies'])
      },
      (error) => {
        this.loginFailedMessage = true
        console.log('User doesnot Exist:Login Failed', error)
        // this.router.navigate(['movies'])
      },
    )
  }
  onSubmit(loginform: any) {
    console.log(loginform)
  }
}
