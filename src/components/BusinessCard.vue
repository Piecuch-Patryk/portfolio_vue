<template>
  <div class="flip-box">
    <div class="flip-box-inner" :style="reverse ? 'transform: rotateY(-180deg)' : ''">
      <div class="flip-box-front">
        <img src="@/assets/business_card/Front.png" alt="">
      </div>
      <div class="flip-box-back">
        <img src="@/assets/business_card/Back.png" alt="">
      </div>
    </div>
  </div>
  <div class="text">
    <h3>Business Card</h3>      
    <h4>Car Mechanic Design</h4>
    <p>Made from scratch in Figma App. Project and design created by myself.</p>
    <button @click="reverse = !reverse">{{ reverse ? 'Show Front' : 'Flip Card'}}</button>
  </div>
</template>

<script>
export default {
  name: 'BusinessCard',
  data() {
    return {
      reverse: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-box {
  background-color: transparent;
  width: 100%;
  perspective: 600px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin-bottom: 8rem;
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

img {
  width: 100%;
  border-radius: 10px;
}

.flip-box-front {

  img {
    box-shadow:
    rgba(255, 255, 255, 0.22) 0px 60px 123px -25px,
    rgba(255, 255, 255, 0.09) 0px 35px 75px -35px;
  }
}

.flip-box-back {
  transform: rotateY(180deg);
}

.text {
  margin: 7rem auto 2rem;
  color: #ddd;
  text-align: center;

  h3 {
    font-size: 2rem;
  }
  h4 {
    margin: .2rem auto 1.5rem;
    font-weight: 400;
  }
  p {
    padding: 0 1rem;
  }
  button {
    background: none;
    border-radius: .5rem;
    border-color: #ddd;
    padding: .3rem 1rem;
    font-size: 1rem;
    color: #ddd;
    margin: 2rem auto 0;
    cursor: pointer;
  }
}

@media (min-width: 500px) {
  .flip-box {
    width: 75%;
    margin: 0 auto 5rem;
  }
}

@media (min-width: 768px) {
  .flip-box {
    margin: 10rem auto 3rem;
    perspective: 1000px;
  }

  .text {
    margin: 12rem auto 0 0;
  }
}

@media (min-width: 1000px) {
  .flip-box {
    width: 600px;
    margin-bottom: 8rem;
    perspective: 1300px;
  }
}
@media (min-width: 1200px) {
  .flip-box {
    margin-bottom: 12rem;
    perspective: 1500px;
  }
}
</style>