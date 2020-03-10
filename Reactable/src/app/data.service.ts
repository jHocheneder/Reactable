import { Injectable } from '@angular/core';
import { Profil } from './profil';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public benutzer: Profil;
  public angemeldet: boolean = false;
  
  constructor() { }
}
