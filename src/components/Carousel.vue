<template>
  <div class="container fade-in">
    <div class="carousel" :style="rotateY">
        <div class="item a">
          <div>
            <h3>SPACER</h3>
            <h4>NASA API</h4>
          </div>
        </div>
        <div class="item b">
          <p>Single page web application connected to NASA API. User can search for space-related images.</p>
        </div>
        <div class="item c">
          <h3>Technologies</h3>
          <ul>
            <li>Vue</li>
            <li>External API</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div class="item d">
          <a href="https://devpat.online/projects/spacer/index.html" target="_blank">
            <font-awesome-icon :icon="['fa-solid', 'fa-globe']"></font-awesome-icon>
          </a>
          <a href="https://github.com/Piecuch-Patryk/spacer" target="_blank">
            <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" />
          </a>
        </div>
        <div class="item e">
          <img src="@/assets/spacer/responsive_devices.webp" alt="Responsive design displayed on different devices.">
        </div>
        <div class="item f">
          <video 
            src="@/assets/spacer/spacer.mp4"
            loop
            autoplay
            muted
            preload="auto"
          ></video>
        </div>
    </div>
  </div>
  <button @click="rotate('prev')" class="prev"><i class="fa-solid fa-circle-chevron-left"></i></button>
  <button @click="rotate('next')" class="next"><i class="fa-solid fa-circle-chevron-right"></i></button>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      rotateVal: 0,
    };
  },
  computed: {
    rotateY() {
      return { transform: `rotateY(${ this.rotateVal }deg)` };
    },
  },
  methods: {
    rotate(direction) {
      if(direction === 'next') this.rotateVal -= 60;
      if(direction === 'prev') this.rotateVal += 60;
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 160px;
  height: 160px;
  position: relative;
  perspective: 600px;
}

.carousel {
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.item {
  position: absolute;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  text-align: center;
  color: #ddd;
  border-radius: .5rem;
}

.a {
  transform: rotateY(0deg) translateZ(160px);
  background-image: url('@/assets/spacer/main.webp');
  background-size: cover;
  background-position: center;
  z-index: -1;
  font-size: 1.25rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: -1;
  }

  h3 {
    margin-bottom: .5rem;
  }
}
.b {
  transform: rotateY(60deg) translateZ(160px);
  background: rgba(200,200,200,.95);
  color: #333;
}
.c {
  transform: rotateY(120deg) translateZ(160px);
  background: rgba(57, 181, 74,.95);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: .5rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: .2rem;
    }
  }
}
.d {
  transform: rotateY(180deg) translateZ(160px);
  background: rgba(10,10,10,.95);

  a {
    font-size: 3rem;
    margin: 0 .5rem;
    color: #ddd;
  }
}
.e {
  transform: rotateY(240deg) translateZ(160px);
  background-color: rgba(200,200,200,.95);

  img {
    width: 100%;
  }
} 
.f {
  transform: rotateY(300deg) translateZ(160px);
  background-color: #fff;
  padding: .5rem;

  img {
    width: 100%;
  }
}

.next, .prev {
  position: absolute;
  top: 50%;
  font-size: 1.5rem;
  line-height: 1.5rem;
  background: none;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: .25rem;
  color: #ddd;
  cursor: pointer;
  transform: translateY(-50%);
  transition: all 0.2s ease;

  &:active {
    border-color: #ddd;
  }

  &:focus {
    outline: none;
    border-color: #ddd;
  }
}
.next { right: 0; }
.prev { left: 0; }

@media (min-width: 768px) {
  .container {
    width: 250px;
    height: 250px;
    perspective: 1000px;
  }

  .item {
    width: 250px;
    height: 250px;
  }

  .a {
    transform: rotateY(0deg) translateZ(250px);
  }
  .b {
    transform: rotateY(60deg) translateZ(250px);
  }
  .c {
    transform: rotateY(120deg) translateZ(250px);
  }
  .d {
    transform: rotateY(180deg) translateZ(250px);
  }
  .e {
    transform: rotateY(240deg) translateZ(250px);
  } 
  .f {
    transform: rotateY(300deg) translateZ(250px);
  }
}
@media (min-width: 1200px) {
  .container {
    width: 320px;
    height: 320px;
    perspective: 1400px;
  }

  .item {
    width: 320px;
    height: 320px;
  }

  .a {
    transform: rotateY(0deg) translateZ(320px);
  }
  .b {
    transform: rotateY(60deg) translateZ(320px);
  }
  .c {
    transform: rotateY(120deg) translateZ(320px);
  }
  .d {
    transform: rotateY(180deg) translateZ(320px);
  }
  .e {
    transform: rotateY(240deg) translateZ(320px);
  } 
  .f {
    transform: rotateY(300deg) translateZ(320px);
  }
  .next { 
    right: 15%;
    font-size: 2rem;
  }
  .prev {
    left: 15%;
    font-size: 2rem;
  }
}
</style>
