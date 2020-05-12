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
    this.emit('login', user);
  }

  public returnLogin() {
    return Observable.create((subscriber) => {
        this.socket.on('returnLogin', (msg) => {
            subscriber.next(msg);
        });
    });
  }

  public register(user) {
    this.socket.emit('register', user);
  }

  public returnRegister() {
    return Observable.create((subscriber) => {
      this.socket.on('returnRegister', (msg) => {
        subscriber.next(msg);
      });
    });
  }

  public gameStart() {
    let timeStamp = new Date();
    let tomorrow = new Date();

    tomorrow.setTime(tomorrow.getTime() + 1000);
    console.log(timeStamp);
    console.log(tomorrow);
    let sec = (tomorrow.getTime() - timeStamp.getTime()) / 1000
    let min = Math.floor(sec / 60)
    let hour = Math.floor(min / 60)
    console.log(hour + ":" + min + ":" + sec);
    this.socket.emit('gamestart', timeStamp);
  }
}
