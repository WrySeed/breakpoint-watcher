const THREE = require('three')

module.exports = {
  defaultBreakpoint: {
    format: 'Desktop',
    color: '#ef5350'
  },
  minimumDeviceSize: 320,
  maximumDeviceSize: 9999,
  fov: 60,
  geometry: new THREE.PlaneGeometry(160, 160, 38, 38),
  material: new THREE.MeshPhongMaterial({ shading: THREE.FlatShading })
}
