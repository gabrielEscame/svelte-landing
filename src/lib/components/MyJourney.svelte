<script>
  import myself from '$lib/assets/myself.png'
</script>

<section class="my-journey">
  <h2 class="my-journey__title">
    Here's a little bit about me and my career journey.
  </h2>
  <div class="my-journey__content">
    <div class="my-journey__text">
      <h3 class="my-journey__subtitle">Sed ut perspiciatis</h3>
      <p class="my-journey__description">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est.
      </p>
    </div>
    <img class="my-journey__image" src={myself} alt="myself" />
  </div>
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

    &__content {
      display: flex;
      align-items: center;
    }

    &__text {
      width: 100%;
      padding-right: 20px;
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
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.015em;
    }

    &__image {
      height: 205px;
      width: 175px;
      transform: rotate(5deg);
    }
  }
</style>
