<template>
  <article>
    <div class="slide-in">
      <img src="@/assets/about.webp" alt="About section image.">
    </div>
    <div class="fade-in">
      <p>Fully responsive websites and web applications. Small and large projects. Maintaining codes or designing from scratch. Self-taught person with <span class="word-decor">commercial experience</span> in <span class="laravel">Laravel</span> and <span class="magento">Magento2</span>.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
article {
  padding: 2rem 1rem;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
  }
  p {
    color: #ddd;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    padding: 2rem;
  }
  .word-decor {
    font-weight: bold;
  }
  .laravel {
      color: #F72C1F;
  }
  .magento {
      color: #F04A10;
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    margin: 7rem 0;

    .slide-in {
      width: 100%;
    }

    img {
      transform:
        perspective(1000px)
        rotateY(10deg);
    }

    p {
      width: 80%;
      margin: 0 auto;
      transform:
        perspective(1000px)
        rotateY(-10deg);
      font-size: 2rem;
      padding: 1rem 2rem;
      color: #333;
    background-color: rgba(255,255,255,.9);
      box-shadow:
    rgba(255, 255, 255, 0.42) 0px 60px 123px -25px,
    rgba(255, 255, 255, 0.08) 0px 35px 75px -35px;
      border-radius: 10px;
    }
  }

  @media (min-width: 1500px) {
    justify-content: center;
    flex-grow: 1;

    img {
      width: 100%;
      transform:
        perspective(1000px)
        rotateY(10deg)
        translateX(25%);
    }
    p {
      width: 60%;
      margin: 0 auto
    }
  }
}
</style>
