<template>
  <div class="stars-wrap">
    <span v-for="star in stars.qty" :key="star"
      :style="{
        top: randomInteger() + 'px',
        left: randomInteger() + 'px',
        transform: `scale(${stars.size})`,
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    stars: Object,
  },
  methods: {
    randomInteger(min = 0, max = document.body.clientHeight) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
.stars-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>
