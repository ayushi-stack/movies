import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = ''
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      'https://demo.credy.in/api/v1/usermodule/login/',
      {
        username,
        password,
      },
    )
  }

  logout() {
    localStorage.setItem('token', '')
    this.setToken('')
    this.messageService.sendData({
      type: 'logout',
      data: { status: 'S', message: 'Logout Successful' },
    })
    this.router.navigate(['login'])
  }

  getToken() {
    const tkn = localStorage.getItem('token')
    if (tkn) {
      this.token = tkn
    }
    return this.token
  }

  setToken(token: string) {
    this.token = token
  }
}
