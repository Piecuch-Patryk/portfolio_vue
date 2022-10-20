<template>
  <header>
    <div class="text">
      <h1>Hi! I am Patryk</h1>
      <p class="subtitle">Junior Full-Stack Developer</p>
      <p class="content">I design and develop amazing web applications. Some of my recent projects are listed below.</p>
    </div>
    <div>
      <img src="@/assets/header.svg" alt="Header image - man working on laptop.">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-around;
  min-height: 90vh;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%,rgba(255,255,255,.2) 5%, rgba(255,255,255,.4) 10%, rgba(255,255,255,.6) 15%, rgba(255,255,255,.7) 20%, rgba(76,155,246,.7) 56%, rgba(5,121,246,1) 95%);
  text-align: center;
  padding: 1.5rem;
  color: #323;

  .text {
    padding: 1.5rem;
    transform:
    perspective(1000px);
    box-shadow:
    rgba(255, 255, 255, 0.42) 0px 60px 123px -25px,
    rgba(255, 255, 255, 0.08) 0px 35px 75px -35px;
    border-radius: 1rem;
    border: 1px solid;
    border-color:
    rgba(76,155,246,1)
    rgba(100,155,246,1)
    rgba(150,200,246,1);
    background-color: rgba(255,255,255,.3);
    margin-bottom: 10vh;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 5px;
      box-shadow: 0 30px 15px 2px rgba(0,0,0,.2);
      background-size: cover;
      background-repeat: no-repeat;
      transform: translateX(-50%);
      border-radius: 100%;
    }

    h1 {
      font-size: 2.5rem;
    }
    .subtitle {
      padding: .5rem;
      font-size: .8rem;
      font-style: italic;
    }
    .content {
      line-height: 1.5;
      padding: 0 1rem;
    }
  }

  img {
    width: 100%;
  }
}
</style>
