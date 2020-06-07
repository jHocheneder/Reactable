import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  
  socket: any;
  readonly url: string = "ws://vm112.htl-leonding.ac.at:8080";
  //readonly url: string = "ws://localhost:3000";

  constructor() {
    localStorage.clear();
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
    
    console.log(gameStart)
    
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

  public returnUpdatedUser() {
    return Observable.create((subscriber) => {
      this.socket.on('returnUpdatedUser', (msg) => {
        subscriber.next(msg);
      })
    })
  }

  public searchOpponent(user) {
    //user muss den suchbegriff der Suche enthalten
    //am server werden alle Leute die like "Suchbegriff%" sind, zurückgegeben
    //Nice wär, wenn ma des dann in an Pop-Up Fenster darstellen könnten. Maybe mit den Usernamen und daneben einen "herausfordern" - Button
    this.socket.emit('searchOpponent', user);
  }

  public returnFoundOpponent() {
    return Observable.create((subscriber) => {
      this.socket.on('returnFoundOpponent', (users) => {
        subscriber.next(users);
      })
    })
  }
}
