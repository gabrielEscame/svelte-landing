<script>
  import { onMount } from 'svelte'
  import { slideAnimation } from '$lib/utils/animation.js'

  onMount(() => {
    slideAnimation('.hero__title')
  })
</script>

<section class="hero">
  <h1 class="hero__title">
    <strong>Hi,</strong> <br />
    I'm
    <strong><span class="hero__title hero__title--blue">Sk</span>ame,</strong
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
    background-color: $black;

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
