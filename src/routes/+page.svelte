<script>
  import { onMount } from 'svelte'
  import * as THREE from 'three'

  import Hero from '$lib/components/Hero.svelte'
  import Header from '$lib/components/Header.svelte'
  import img from '$lib/assets/liquid-background.png'

  const createScene = () => {
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

  const createMesh = () => {
    const geometry = new THREE.PlaneGeometry(1.84, 1.308, 30, 15)
    const material = new THREE.ShaderMaterial({
      vertexShader: document.querySelector('#vertexShader').textContent,
      fragmentShader: document.querySelector('#fragmentShader').textContent,
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: new THREE.TextureLoader().load(img) }
      }
    })
    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.x = 0.515
    mesh.position.y = 0.195
    mesh.position.z = 0

    return { mesh, material }
  }

  const createAppendRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.querySelector('.hero').appendChild(renderer.domElement)

    return { renderer }
  }

  onMount(() => {
    const { scene, camera } = createScene()
    const { mesh, material } = createMesh()
    const { renderer } = createAppendRenderer()
    scene.add(mesh)

    const clock = new THREE.Clock()

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      material.uniforms.uTime.value = clock.getElapsedTime() / 2
    }
    animate()
  })
</script>

<div class="landing">
  <Header />
  <Hero />
</div>

<style lang="scss">
  .landing {
    overflow-x: hidden;
    background-color: $dark;
    font-size: 40px;
    max-width: 100vw;
  }
</style>
