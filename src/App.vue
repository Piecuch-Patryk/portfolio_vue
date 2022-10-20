<template>
  <BackgroundImage />
  <Header />
  <About />
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';

export default {
  name: 'App',
  components: {
    BackgroundImage,
    Header,
    About,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
    scroll-behavior: smooth;
}
body {
  font-family: sans-serif;
  height: 500vh;
}
</style>
