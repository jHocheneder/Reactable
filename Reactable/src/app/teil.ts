import { Color3 } from '@babylonjs/core';
import { Wuerfel } from './wuerfel';

export class Teil {
    public id : Number;
    public modellId: Number;
    public farbe:Color3;
    public wuerfel: Array<Wuerfel> = []

    constructor(id : Number){
        this.id = id
        this.farbe = new Color3(
            Math.random(),
            Math.random(),
            Math.random()
          )
    }
}
