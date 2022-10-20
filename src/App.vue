<template>
  <BackgroundImage />
  <Header />
  <About />
  <Main />
  <Form />
  <Footer />
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Main from '@/components/Main.vue';
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    BackgroundImage,
    Header,
    About,
    Main,
    Form,
    Footer,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
  font-family: sans-serif;
}
#app {
  overflow-x: hidden;
}
</style>
