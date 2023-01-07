<template>
  <main>
    <div class="wrapper vag">
      <Vag />
    </div>
    <div class="wrapper norella">
      <Norella />
    </div>
    <div class="wrapper">
      <Carousel />
    </div>
    <div class="wrapper">
      <Hangman />
    </div>
  </main>
</template>

<script>
import Vag from '@/components/Vag.vue';
import Norella from '@/components/Norella.vue';
import Carousel from '@/components/Carousel.vue';
import Hangman from '@/components/Hangman.vue';

export default {
  name: 'Main',
  components: {
    Vag,
    Norella,
    Carousel,
    Hangman,
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  z-index: 3;
  padding: 2rem 2rem 10rem;
  
  .wrapper {
    display: flex;
    flex-flow: column-reverse;
    position: relative;
    
    &.vag {
      flex-flow: column;
    }

    &:nth-of-type(2) {
      margin-top: 8rem;
    }
    &:nth-of-type(3) {
      margin-top: 17rem;
    }
    &:nth-of-type(4) {
      margin-top: 12rem;
    }
  }
}

@media (min-width: 768px) {
  main {

    .wrapper {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      &.vag {
        flex-direction: row;
      }
    }
  }
}

@media (min-width: 1200px) {
  main {
    .wrapper {
      &:nth-of-type(1) {
        padding-left: 2rem;
      }
    }
  }
}
@media (min-width: 1400px) {
  main {
    .wrapper {
      &:nth-of-type(1) {
        padding-left: 8rem;
      }
    }
  }
}
</style>
