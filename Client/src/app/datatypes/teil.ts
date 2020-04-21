import { Color3, Mesh, StandardMaterial, Scene } from '@babylonjs/core'

export class Teil {
    public id : Number
    public material:StandardMaterial
    public wuerfel: Array<Mesh> = []

    constructor(id : Number, scene : Scene){
        this.id = id
        this.material = new StandardMaterial('material' + id, scene)
        this.material.diffuseColor = new Color3(
            Math.random(),
            Math.random(),
            Math.random()
          )
    }//constructor
}//class Teil
