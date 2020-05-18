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
        this.socket.on('returnLogin', (id) => {
            subscriber.next(id);
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

  public gameStart(userId) {
    let gameStart = {
      userId: userId,
      modellId: 1
    };
    
    this.socket.emit('gameStart', gameStart);
  }

  public gameFinished(userId) {
    let timeStamp = new Date();

    console.log(timeStamp)

    let gameEnd = {
      userId: userId
    }

    this.socket.emit('gameFinished', gameEnd);
  }

  public updateUser(user) {
    console.log(user);
    this.socket.emit('updateUser', user);
  }
}
