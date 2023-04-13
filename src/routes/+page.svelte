<script>
  import { onMount } from 'svelte'

  import Hero from '$lib/components/Hero.svelte'
  import Header from '$lib/components/Header.svelte'
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
