<template>
  <article>
    <div>
      <img src="@/assets/about.png" alt="About section image.">
    </div>
    <div>
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
}
</style>
