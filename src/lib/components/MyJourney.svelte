<section class="my-journey">
  <h2 class="my-journey__title">
    Hi I'm Gabriel, here's a little about me and my journey
  </h2>
  <h3 class="my-journey__subtitle">Sed ut perspiciatis</h3>
  <p class="my-journey__description">
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
    nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas
    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
  </p>
</section>

<style lang="scss">
  .my-journey {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      color: $white;
      font-size: 32px;
      font-weight: 600;
    }
    &__subtitle {
      color: $blue;
      font-size: 24px;
      margin-top: 40px;
      font-weight: 100;
      font-style: italic;
    }
    &__description {
      color: $white;
      font-size: 14px;
      margin-top: 24px;
      max-width: 615px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.015em;
      max-width: 62%;
    }
  }
</style>
