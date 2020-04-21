import { Teil } from './teil'
import { Mesh } from '@babylonjs/core'

export class Wuerfel {
    public id:Number
    public x_pos = 0
    public y_pos = 0
    public z_pos = 0
    public teil:Teil
    public box:Mesh;

    constructor(id:Number) {
        this.id = id
    }
}
