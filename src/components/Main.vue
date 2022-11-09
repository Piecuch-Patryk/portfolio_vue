<template>
  <main>
    <div class="wrapper">
      <Norella />
    </div>
    <div class="wrapper">
      <Carousel />
    </div>
    <div class="wrapper">
      <BusinessCard />
    </div>
  </main>
</template>

<script>
import Norella from '@/components/Norella.vue';
import Carousel from '@/components/Carousel.vue';
import BusinessCard from '@/components/BusinessCard.vue';

export default {
  name: 'Main',
  components: {
    Norella,
    Carousel,
    BusinessCard,
  },
  methods: {
    cubeInit() {
      const cube = document.querySelector('.cube');
      const radioGroup = document.querySelector('.cube__nav');
      let currentClass = '';

      function changeSide() {
        const checkedRadio = radioGroup.querySelector(':checked');
        const showClass = 'show-' + checkedRadio.value;
        if(currentClass) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add(showClass);
        currentClass = showClass;
      }

      radioGroup.addEventListener( 'change', changeSide );
    },
  },
  mounted() {
    this.cubeInit();
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
    
    &:nth-of-type(2) {
      margin-top: 17rem;
    }
    &:nth-of-type(3) {
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
    }
  }
}
</style>
