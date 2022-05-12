import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string = ''
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      'https://demo.credy.in/api/v1/usermodule/login/',
      {
        username,
        password,
      },
    )
  }

  getToken() {
    return this.token
  }

  setToken(token: string) {
    this.token = token
  }
}
