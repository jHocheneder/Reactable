import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*public ydown: Number = 70;
  public yup: Number = 82;
  public xup: Number = 67;
  public xdown: Number = 65;
  public zup: Number = 87;
  public zdown: Number = 83;*/
 

  public binds = {
     'ydown' : 'f',
     'yup': 'r',
     'xup': 'd',
     'xdown': 'a',
     'zup': 'w',
     'zdown': 's'
  };

  public ydown: String = 'f';
  public yup: String = 'r';
  public xup: String = 'd';
  public xdown: String = 'a';
  public zup: String = 'w';
  public zdown: String = 's';

  constructor() {
   /* this.ydown= 70;
    this.yup = 82;
    this.xup = 67;
    this.xdown = 65;
    this.zup = 87;
    this.zdown = 83;

    his.ydown= 70;
    this.yup = 82;
    this.xup = 67;
    this.xdown = 65;
    this.zup = 87;
    this.zdown = 83;*/

   }

   setDef(){
    this.ydown = 'f';
    this.yup = 'r';
    this.xup = 'd';
    this.xdown = 'a';
    this.zup = 'w';
    this.zdown = 's';
   }
}
