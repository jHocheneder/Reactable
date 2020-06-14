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
    this.socket.emit('searchOpponent', user);
  }

  public returnFoundOpponent() {
    return Observable.create((subscriber) => {
      this.socket.on('returnFoundOpponent', (users) => {
        subscriber.next(users);
      })
    })
  }

  public invitePlayer(username) {
    let room = localStorage.setItem('room', localStorage.getItem('username') + Math.floor(Math.random()*10));
    if (!(localStorage.getItem('username') == null || localStorage.getItem('userId') == null)) {
      let users = {
        username: localStorage.getItem('username'),
        usernameOpponent: username,
        id: localStorage.getItem('userId'),
        modelid: 1,
        room: room
      }
  
      this.socket.emit('invitePlayer', users);
    }
  }

  public returnInvitation() {
    return Observable.create((subscriber) => {
      this.socket.on('returnInvitation', (inv) => {
        subscriber.next(inv);
      })
    })
  }

  public returnGameId() {
    return Observable.create((subscriber) => {
      this.socket.on('returnGameId', (gameId) => {
        localStorage.setItem('gameId', gameId);
      })
    })
  }

  public connectGame(room) {
    if (!(localStorage.getItem('username') == null || localStorage.getItem('userId') == null)) {
      console.log(room)
      let data = {
        room: room,
        gameId: localStorage.getItem('gameId')
      }

      this.socket.emit('connectGame', data);
    }   
  }

  public countdown() {
    return Observable.create((subscriber) => {
      this.socket.on('countdown', (msg) => {
        subscriber.next(msg);
      })
    })
  }
  
  public multiplayerGameFinished(userId, gameId) {
    let data = {
      userId: userId,
      gameId: gameId
    }

    this.socket.emit('multiplayerGameFinished', data);
  }

  public multiplayerGameEnd() {
    return Observable.create((subscriber) => {
      this.socket.on('multiplayerGameEnd', (username) => {
        if (username == localStorage.getItem('username')) {
          subscriber.next('<b>Herzlichen Glückwunsch!</b><br>Du hast gewonnen.');
        } else {
          subscriber.next('<b>Du hast verloren</b>. Dein Gegner war leider schneller als du.<br>Beeil dich beim nächsten Mal, um der Gewinner zu sein.');
        }
      })
    })
  }

  public leaveRoom(room) {
    this.socket.emit('leaveRoom', room);
  }
}
