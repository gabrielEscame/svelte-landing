<script>
  import { onMount } from 'svelte'
  import {
    slideAnimation,
    scaleAnimation
  } from '$lib/utils/greensockAnimation.js'
  import {
    createScene,
    createMesh,
    createAppendRenderer,
    createClock
  } from '$lib/utils/threeAnimation.js'

  onMount(() => {
    const { scene, camera } = createScene()
    const { mesh, material } = createMesh()
    const { renderer } = createAppendRenderer()
    scene.add(mesh)

    const { clock } = createClock()

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      material.uniforms.uTime.value = clock.getElapsedTime() / 2
    }
    animate()
  })

  onMount(() => {
    slideAnimation('.hero__wrapper', { x: 280, rotate: '0deg' })
    scaleAnimation('.hero__square', { delay: 0.125 })
    slideAnimation('.hero__title', { delay: 0.25 })
  })
</script>

<section class="hero">
  <div class="hero__wrapper">
    <h1 class="hero__title">
      <strong>Hi,</strong> <br />
      I'm
      <strong><span class="hero__title hero__title--blue">Sk</span>ame,</strong
      ><br />
      <strong>Web</strong> developer
    </h1>
    <span class="hero__square" />
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    &__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      height: 80%;
      width: 64%;
    }

    // &__background {
    //   position: relative;
    //   height: 100%;
    //   width: 100%;
    // }

    &__square {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 186px;
      width: 230px;
      background-color: rgba(17, 154, 218, 0.44);
      z-index: 1;
    }

    &__title {
      position: absolute;
      color: $white;
      font-style: italic;
      font-size: 60px;
      font-weight: 100;
      z-index: 2;
      bottom: 186px;
      transform: translateY(88px);
      left: -145px;

      &--blue {
        display: contents;
        color: $blue;
        font-weight: bolder;
      }
    }
  }
</style>
