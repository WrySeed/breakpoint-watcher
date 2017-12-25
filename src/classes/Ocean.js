import * as THREE from 'three'

export default class Ocean extends THREE.Mesh {
  constructor (geometry, material, color) {
    super(geometry, material)

    this.geometry.verticesNeedUpdate = true
    this.receiveShadow = true

    this.setColor(color)
    this.initWaves()
  }

  setColor (color) {
    this.material.color.setHex(color.replace('#', '0x'))
  }

  initWaves () {
    for (let v of this.geometry.vertices) {
      let angle = Math.random() * Math.PI

      v.x += -1 + Math.random() * 1
      v.y += -1 + Math.random() * 1
      v.z = Math.sin(angle)
      v.angle = angle
      v.amplitude = 0.0025 + Math.random() * 0.0025
      v.speed = 0.016 + Math.random() * 0.032
    }
  }

  moveWaves () {
    for (let v of this.geometry.vertices) {
      v.z += Math.sin(v.angle) * v.amplitude
      v.angle += v.speed
    }
    this.geometry.verticesNeedUpdate = true
  }
}
