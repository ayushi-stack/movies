import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject: Subject<any> = new Subject<any>()

  sendData(data: { type: string; data: any }) {
    this.subject.next(data)
  }
  getData() {
    return this.subject
  }
}
