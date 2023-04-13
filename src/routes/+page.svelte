<script>
  import Hero from '$lib/components/Hero.svelte'
  import Header from '$lib/components/Header.svelte'
  import MyJourney from '$lib/components/MyJourney.svelte'
</script>

<div class="landing">
  <Header />
  <Hero />
  <div class="landing__container">
    <MyJourney />
  </div>
</div>

<style lang="scss">
  .landing {
    overflow-x: hidden;
    background-color: $dark;
    font-size: 40px;
    max-width: 100vw;

    &__container {
      max-width: 60%;
      margin: auto;
      padding: 0 24px;
    }
  }
</style>
