import * as THREE from 'three'
import img from '$lib/assets/liquid-background.png'

export const createScene = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.z = 1

  return {
    scene,
    camera
  }
}

export const createMesh = () => {
  const geometry = new THREE.PlaneGeometry(1.84, 1.308, 30, 15)
  const material = new THREE.ShaderMaterial({
    vertexShader: document.querySelector('#vertexShader').textContent,
    fragmentShader: document.querySelector('#fragmentShader').textContent,
    uniforms: {
      uTime: { value: 0.0 },
      uFrequency: { value: 10.0 },
      uAmplitude: { value: 0.01 },
      uSpeed: { value: 1.0 },
      uTexture: { value: new THREE.TextureLoader().load(img) }
    },
    // wireframe: true
  })
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.x = 0.515
  mesh.position.y = 0.195
  mesh.position.z = 0

  return { mesh, material }
}

export const createAppendRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.querySelector('.hero').appendChild(renderer.domElement)

  return { renderer }
}

export const createClock = () => {
  const clock = new THREE.Clock()

  return {
    clock
  }
}
