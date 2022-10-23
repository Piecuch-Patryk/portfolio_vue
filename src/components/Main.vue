<template>
  <main>
    <div class="scene__wrap fade-in">
      <div class="scene">
        <div class="cube">
          <div class="cube__face cube__face--front">
            <div class="text-bg-cover">
              <h4>Norella Beauty Studio</h4>
            </div>
          </div>
          <div class="cube__face cube__face--back">
            <p>Mobile-first, fully responsive CMS/CRUD web application. Build with Laravel and Bootstrap. <span>Slow loading might be caused due to shared hosting server.</span></p>
          </div>
          <div class="cube__face cube__face--right">
            <h4>Technologies</h4>
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>CSS</li>
              <li>Laravel</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="cube__face cube__face--left">
            <a href="https://devpat.online/projects/norella/public" target="_blank">
              <font-awesome-icon :icon="['fa-solid', 'fa-globe']"></font-awesome-icon>
            </a>
            <a href="https://github.com/Piecuch-Patryk/NorellaCMS" target="_blank">
              <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" />
            </a>
          </div>
          <div class="cube__face cube__face--top"></div>
          <div class="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
    <div class="slide-in">
      <ul class="cube__nav">
        <li>
          <input id="front" type="radio" name="rotate-cube-side" value="front" checked />
          <label for="front">Norella</label>
        </li>
        <li>
          <input id="right" type="radio" name="rotate-cube-side" value="right" />
          <label for="right">Technologies</label>
        </li>
        <li>
          <input id="back" type="radio" name="rotate-cube-side" value="back" />
          <label for="back">Description</label>
        </li>
        <li>
          <input id="left" type="radio" name="rotate-cube-side" value="left" />
          <label for="left">Links</label>
        </li>
        <li>
          <input id="top" type="radio" name="rotate-cube-side" value="top" />
          <label for="top">Mobile First</label>
        </li>
        <li>
          <input id="bottom" type="radio" name="rotate-cube-side" value="bottom" />
          <label for="bottom">GIF</label>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
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
  display: flex;
  flex-flow: column-reverse;
  padding: 2rem 2rem 10rem;
}
.scene__wrap {
  margin-top: 4rem;
}
.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
  margin: auto;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-110px);
  transition: transform 1s;
}
.cube {
    transform: translateZ(-110px) rotateY(20deg) rotateX(30deg);
}

.cube.show-front  { transform: translateZ(-110px) rotateY(   0deg); }
.cube.show-right  { transform: translateZ(-110px) rotateY( -90deg); }
.cube.show-back   { transform: translateZ(-110px) rotateY(-180deg); }
.cube.show-left   { transform: translateZ(-110px) rotateY(  90deg); }
.cube.show-top    { transform: translateZ(-110px) rotateX( -90deg); }
.cube.show-bottom { transform: translateZ(-110px) rotateX(  90deg); }

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  color: white;
  text-align: center;
  border-radius: 1rem;
}

.text-bg-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.9) 15%, rgba(252,70,107,0.8) 100%);
  box-shadow: inset 0 0 10px #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    line-height: 2;
  }
}

.cube__face--front  {
  background-image: url("@/assets/norella/norella-offers.png");
  background-size: cover;
}
.cube__face--back  {
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.95) 30%, rgba(252,70,107,0.8) 100%);
  display: flex;
  align-items: center;

  p {
    padding: .5rem;
  }
}
.cube__face--right  {
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.9) 15%, rgba(252,70,107,0.8) 100%);
}
.cube__face--right {
  h4 {
    font-size: 1.2rem;
    padding: 1rem;
  }
  ul {
    list-style: none;

    li {
      margin-bottom: .2rem;
    }
  }
}
.cube__face--left  {
  background-image: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.95) 30%, rgba(252,70,107,0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 3rem;
    color: #ddd;
    margin: 0 1rem;
  }
}
.cube__face--top  {
  background-image: url("@/assets/norella/norella.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-color: rgba(63,94,251,.9);
  transition: background-color .2s ease-in-out;
}
.cube__face--bottom  {
  background-image: url("@/assets/norella/Norella-main-page.gif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  background-color: rgba(63,94,251,.9);
  transition: background-size .2s ease-in-out, background-color .2s ease-in-out;
}
.cube__face--top:hover {
  background-color:rgba(83, 76, 230, .9);
}
.cube__face--bottom:hover {
  background-size: 95%;
  background-color:rgba(83, 76, 230, .9);
}
.description {
  padding: .5rem;
}

.cube__face--front  { transform: rotateY(  0deg) translateZ(110px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(110px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(110px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(110px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(110px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(110px); }

input {
  display: none;
}
.cube__nav {
  width: 75%;
  list-style-type: none;
  margin: auto;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  box-shadow:
  rgba(22, 31, 39, 0.7) 0px 60px 123px -25px,
  rgba(19, 26, 32, 0.2) 0px 35px 75px -35px;
  border-radius: 10px;
}
.cube__nav li {
  text-align: center;
  margin-bottom: 1rem;
}
.cube__nav li label {
  display: block;
  transition: transform .2s ease-in-out;
  color: #ddd;
    
}
.cube__nav li label:hover {
  cursor: pointer;
  transform: 
    scale(1.2)
    translateY(-5%);
}
.cube__nav li input:checked + label {
  transform: 
    scale(1.5)
    translateY(-5%);
}

@media (min-width: 576px) {
  .text-bg-cover {
    h4 {
      font-size: 3rem;
    }
  }
  .scene {
    margin: auto;
    width: 400px;
    height: 400px;
  }
  .cube {
    width: 400px;
    height: 400px;
    transform: translateZ(-220px);
  }
  .cube {
      transform: translateZ(-220px) rotateY(20deg) rotateX(30deg);
  }

  .cube.show-front  { transform: translateZ(-220px) rotateY(   0deg); }
  .cube.show-right  { transform: translateZ(-220px) rotateY( -90deg); }
  .cube.show-back   { transform: translateZ(-220px) rotateY(-180deg); }
  .cube.show-left   { transform: translateZ(-220px) rotateY(  90deg); }
  .cube.show-top    { transform: translateZ(-220px) rotateX( -90deg); }
  .cube.show-bottom { transform: translateZ(-220px) rotateX(  90deg); }

  .cube__face {
    width: 400px;
    height: 400px;
  }

  .cube__face--front  { transform: rotateY(  0deg) translateZ(220px); }
  .cube__face--right  { transform: rotateY( 90deg) translateZ(220px); }
  .cube__face--back   { transform: rotateY(180deg) translateZ(220px); }
  .cube__face--left   { transform: rotateY(-90deg) translateZ(220px); }
  .cube__face--top    { transform: rotateX( 90deg) translateZ(220px); }
  .cube__face--bottom { transform: rotateX(-90deg) translateZ(220px); }

  .cube__face--right {
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      display: none;
    }
    li {
      font-size: 2rem;
    }
  }

  .cube__face--back {
    font-size: 2rem;
  }
  .cube__face--left {
    a {
      font-size: 6rem;
    }
  }
  .cube__nav {
    margin-top: 2rem;
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  main {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .cube__nav {
    position: relative;
    z-index: -1;
    padding: 2rem 4rem;
    margin-top: 2rem;
    font-size: 2rem;
    width: auto;
    transform:
      perspective(600px)
      rotateY(-15deg)
      translateX(0);
  }
}

@media (min-width: 992px) {
  .cube__nav {
    transform:
      perspective(1000px)
      rotateY(-10deg)
      translateX(0);
  }
}

@media (min-width: 1200px) {
  .text-bg-cover {
    h4 {
      font-size: 3rem;
    }
  }
  .scene {
    width: 550px;
    height: 550px;
  }
  .cube {
    width: 550px;
    height: 550px;
    transform: translateZ(-320px);
  }
  .cube {
      transform: translateZ(-320px) rotateY(20deg) rotateX(30deg);
  }

  .cube.show-front  { transform: translateZ(-320px) rotateY(   0deg); }
  .cube.show-right  { transform: translateZ(-320px) rotateY( -90deg); }
  .cube.show-back   { transform: translateZ(-320px) rotateY(-180deg); }
  .cube.show-left   { transform: translateZ(-320px) rotateY(  90deg); }
  .cube.show-top    { transform: translateZ(-320px) rotateX( -90deg); }
  .cube.show-bottom { transform: translateZ(-320px) rotateX(  90deg); }

  .cube__face {
    width: 550px;
    height: 550px;
  }

  .cube__face--front  { transform: rotateY(  0deg) translateZ(320px); }
  .cube__face--right  { transform: rotateY( 90deg) translateZ(320px); }
  .cube__face--back   { transform: rotateY(180deg) translateZ(320px); }
  .cube__face--left   { transform: rotateY(-90deg) translateZ(320px); }
  .cube__face--top    { transform: rotateX( 90deg) translateZ(320px); }
  .cube__face--bottom { transform: rotateX(-90deg) translateZ(320px); }

  .cube__face--right {

    li {
      font-size: 3rem;
    }
  }

  .cube__face--back {
    font-size: 3rem;
  }
  .cube__face--left {
    a {
      font-size: 8rem;
    }
  }
  .cube__nav {
    z-index: 1;
    font-size: 2.5rem;
  }
}
</style>
