<div class="header">
  <a class="header__icon" href="#skame">SK</a>
  <button class="header__button" onclick={() => console.log('Hi buddy')}>
    contacts
  </button>
</div>

<style lang="scss">
  .header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    justify-content: space-between;
    padding: 24px 80px;
    background: linear-gradient(
      180deg,
      #000000 5%,
      rgba(0, 0, 0, 0.5) 52%,
      rgba(0, 0, 0, 0) 90%
    );

    &__icon {
      position: relative;
      font-size: 40px;
      font-weight: 700;
      font-style: italic;
      text-decoration: none;
      color: $blue;

      &::before {
        position: absolute;
        bottom: -1px;
        left: -20px;
        content: '';
        height: 2px;
        width: 37px;
        background-color: $blue;
      }
    }

    &__button {
      font-size: 16px;
      font-weight: 600;
      font-style: italic;
      background-color: transparent;
      border: none;
      color: $blue;
    }
  }
</style>
