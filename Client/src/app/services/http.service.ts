import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  socket: any;
  readonly url: string = "ws://localhost:3000";

  constructor() {
    this.socket = io(this.url)
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  on(eventName: string, data: any) {
    console.log(data);
    /*this.socket.on(eventName, function(msg) {
      console.log(msg);
    });*/
  }

  public login(user) {
    console.log(user);
    this.emit('login', user);
  }

  public returnLogin = () => {
    return Observable.create((observer) => {
        this.socket.on('returnLogin', (message) => {
            console.log(message);
            observer.next(message);
        });
    });
}

  public register(user) {
    this.socket.emit('register', user);
  }
}
