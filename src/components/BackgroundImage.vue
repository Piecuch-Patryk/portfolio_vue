<template>
  <div></div>
</template>

<script>
export default {
  name: 'BackgroundImage',
}
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left:0;
  bottom: 0;
  right: 0;
  background-image: url('@/assets/body-bg.svg');
  background-position: 0 0;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
  }
}
</style>
