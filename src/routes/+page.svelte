<script>
  import Hero from '$lib/components/Hero.svelte'
</script>

<div class="landing">
  <Hero />
</div>

<style lang="scss">
  .landing {
    overflow-x: hidden;
    background-color: $dark;
    font-size: 40px;
    max-width: 100vw;
    min-height: 200vh;
  }
</style>
