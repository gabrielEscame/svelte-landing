<script>
  import { gsap } from 'gsap'
  import { onMount } from 'svelte'

  onMount(() => {
    gsap.from('.hero__title', {
      x: -200,
      rotate: '5deg',
      opacity: 0,
      duration: 0.6
    })
  })
</script>

<section class="hero">
  <h1 class="hero__title">
    <strong>Hi,</strong> <br />
    I'm
    <strong
      ><span class="hero__title hero__title--blue">Sk</span>ame,</strong
    ><br />
    <strong>Web</strong> developer
  </h1>
</section>

<style lang="scss">
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    &__title {
      color: $white;
      font-style: italic;
      font-weight: 100;

      &--blue {
        color: $blue;
        font-weight: bolder;
      }
    }
  }
</style>
