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
  mounted: function () {
    let scene, camera, renderer, light, ocean

    const render = () => {
      window.addEventListener('resize', resize, false)

      ocean.moveWaves()

      requestAnimationFrame(render)
      renderer.render(scene, camera)
    }

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerWidth)
      camera.aspect = window.innerWidth / window.innerWidth
      camera.updateProjectionMatrix()
    }

    const init = () => {
      // Ocean config & updatable values
      let config = {
        color: '#bada55',
        fov: 60,
        geometry: new THREE.PlaneGeometry(100, 100, 24, 24),
        material: new THREE.MeshPhongMaterial({ shading: THREE.FlatShading })
      }

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(config.fov, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ antialias: true })
      light = new THREE.DirectionalLight(0xffffff, 0.75)
      ocean = new Ocean(config.geometry, config.material, config.color)

      camera.position.set(0, -25, 20)
      camera.rotation.set(Math.PI / 8, 0, 0)

      light.position.set(15, -15, 500)

      ocean.rotateZ(-Math.PI / 6)

      // Add the scene to the DOM
      document.getElementById('background').appendChild(renderer.domElement)

      // Add objects to the scene
      scene.add(light, ocean)

      resize()
      render()
    }

    init()
  }
}
</script>

<style lang="sass" scoped>
  #background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    margin: 0
    overflow: hidden
  canvas
    width: 100%
    height: 100%
</style>

