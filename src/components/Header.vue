<template>
  <header>
    <div class="text fade-in">
      <h1>Hi! I am Patryk</h1>
      <p class="subtitle">Junior Full-Stack Developer</p>
      <p class="content">I design and develop amazing web applications. Some of my recent projects are listed below.</p>
    </div>
    <div class="slide-in">
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
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%,rgba(255,255,255,.2) 5%, rgba(255,255,255,.4) 10%, rgba(255,255,255,.6) 15%, rgba(255,255,255,.7) 20%, rgba(76,155,246,.7) 56%, rgba(5,121,246,1) 95%);
  text-align: center;
  padding: 1.5rem;
  color: #323;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: start;
    overflow: hidden;
  }
  @media (min-width: 1200px) {
    align-items: center;
    justify-content: space-between;
  }

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
    animation: bounce 1s ease-in 0s 1 normal forwards;


    @media (min-width: 576px) {
      width: 70%;
      margin: auto;

      img {
        min-height: 50vh;
      }
    }

    @media (min-width: 992px) {
      z-index: 2;
      width: 50%;
      margin: 50% auto;
      transition: all .4s ease-in-out;
      transform:
        perspective(1000px)
        rotateY(10deg)
        translateY(100%);
    }

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

  @media (min-width: 1200px) {
    .text {

      width: 50%;
      margin: 0 auto;
      transform:
        perspective(1000px)
        rotateY(10deg)
        translateY(0);

      h1 {
        font-size: 3rem;
      }
      .subtitle {
        font-size: 1.2rem;
        padding: 1rem 0;
      }
      .content {
        font-size: 1.8rem;
        padding: 0 1rem;
      }
    }

    .slide-in {
      min-width: 60%;
    }
  }

  @media (min-width: 1500px) {
    .text {
      width: 35%;
    }
  }



  img {
    width: 100%;

    @media (min-width: 992px) {
      position: relative;
      width: 200%;
      z-index: 1;
      transition: all .4s ease-in-out;
      transform:
        perspective(1000px)
        rotateY(-10deg)
        translateX(-30%);
    }

    @media (min-width: 1200px) {
      width: 120%;
      transform:
        perspective(1000px)
        rotateY(-10deg)
        translateX(20px);
    }
  }

}
</style>
