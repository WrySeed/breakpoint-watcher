<template>
  <div id="background"></div>
</template>

<script>
import * as THREE from 'three'
import Ocean from '../classes/Ocean'

import Config from '../config'

export default {
  name: 'Ocean',
  props: {
    color: {
      type: String,
      default: Config.defaultBreakpoint.color,
      required: true
    }
  },
  data () {
    return {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(Config.fov, document.body.clientWidth / document.body.clientHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer({ antialias: true }),
      light: new THREE.DirectionalLight(0xffffff, 0.75),
      ocean: new Ocean(Config.geometry, Config.material, this.color)
    }
  },
  methods: {
    render: function () {
      window.addEventListener('resize', this.resize, false)

      this.ocean.moveWaves()

      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    resize: function () {
      let width = document.body.clientWidth
      let height = document.body.clientHeight

      this.ocean.setColor(this.color)

      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(width, height)
    }
  },
  mounted: function () {
    this.camera.position.set(0, -25, 20)
    this.camera.rotateX(Math.PI / 8)
    this.light.position.set(15, -15, 500)
    this.ocean.rotateZ(-Math.PI / 6)

    document.getElementById('background').appendChild(this.renderer.domElement)

    this.scene.add(this.light, this.ocean)

    this.resize()
    this.render()
  }
}
</script>

<style lang="sass">
  @import "../styles/variables"

  #background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    margin: 0
    overflow: hidden
    canvas
      width: 100% !important
      height: 100%

  @media #{$mobile}
    #background
      display: none
</style>

