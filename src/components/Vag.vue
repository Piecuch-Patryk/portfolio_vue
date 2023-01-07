<template>
  <div class="slide-in">
    <ul class="cube__nav cube__nav__vag">
      <li>
        <input id="1" type="radio" name="rotate-cube-side-vag" value="1" checked />
        <label for="1">Autoservice</label>
      </li>
      <li>
        <input id="2" type="radio" name="rotate-cube-side-vag" value="2" />
        <label for="2">Technologies</label>
      </li>
      <li>
        <input id="3" type="radio" name="rotate-cube-side-vag" value="3" />
        <label for="3">Description</label>
      </li>
      <li>
        <input id="4" type="radio" name="rotate-cube-side-vag" value="4" />
        <label for="4">Links</label>
      </li>
      <li>
        <input id="5" type="radio" name="rotate-cube-side-vag" value="5" />
        <label for="5">Mobile First</label>
      </li>
      <li>
        <input id="6" type="radio" name="rotate-cube-side-vag" value="6" />
        <label for="6">GIF</label>
      </li>
    </ul>
  </div>
  <div class="scene__wrap fade-in">
    <div class="scene">
      <div class="cube__inner cube__vag">
        <div class="cube__face cube__face--1">
          <div class="text-bg-cover">
            <h4>VAG - Autoservice</h4>
          </div>
        </div>
        <div class="cube__face cube__face--3">
          <p>
            Commercial project, designed and build from scratch with Vue3.
          </p>
          <button class="btn">Read more</button>
        </div>
        <div class="cube__face cube__face--2">
          <h4>Technologies</h4>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>CSS</li>
            <li>Vue3</li>
          </ul>
        </div>
        <div class="cube__face cube__face--4">
          <a href="https://devpat.online/projects/vag/public/index.php" target="_blank">
            <font-awesome-icon :icon="['fa-solid', 'fa-globe']"></font-awesome-icon>
          </a>
          <a href="https://github.com/Piecuch-Patryk/vag-autoservice" target="_blank">
            <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" />
          </a>
        </div>
        <div class="cube__face cube__face--5"></div>
        <div class="cube__face cube__face--6">
          <video 
            src="@/assets/norella/Norella-main-page.mp4"
            loop
            autoplay
            muted
            preload="auto"
          ></video>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="modal modal-vag">
    <div>
      <button>&times;</button>
    </div>
    <div>
      <h3>VAG Autoserwis - summary</h3>
    </div>
    <div>
      <h4>Clients' requirements</h4>
      <ol>
        <li>Design the whole app with graphics, content and SEO</li>
        <li>Build the app with suitable technology</li>
        <li>Must be user-friendly and fast loading</li>
        <li>PDF creator - logged in user can create invoice document</li>
        <li>Store documents in database</li>
        <li>Guest can search for a document and download if found</li>
        <li>Documents for guest are encrypted and the customer gets the password to be able to read it</li>
        <li>Documents for logged in user are decrypted</li>
        <li>Contact form sends messages via email</li>
      </ol>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'Vag',
  methods: {
    cubeVagInit() {
      const cube = document.querySelector('.cube__vag');
      const radioGroup = document.querySelector('.cube__nav__vag');
      let currentClass = '';

      function changeSide() {
        const checkedRadio = radioGroup.querySelector(':checked');
        const showClass = 'show-' + checkedRadio.value;

        console.log(showClass);
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
    this.cubeVagInit();
  },
}
</script>

<style lang="scss" scoped>
.wrapper.vag {
  .d-none {
    display: none;
  }
  .scene__wrap {
    margin-top: 8rem;
    order: 0;
  }
  .scene {
    width: 200px;
    height: 200px;
    perspective: 600px;
    margin: auto;
  }

  .cube__inner {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-110px);
    transition: transform 1s;
  }
  .cube__inner {
      transform: translateZ(-110px) rotateY(-20deg) rotateX(30deg);
  }

  .cube__inner.show-1  { transform: translateZ(-110px) rotateY(   0deg); }
  .cube__inner.show-2  { transform: translateZ(-110px) rotateY( -90deg); }
  .cube__inner.show-3   { transform: translateZ(-110px) rotateY(-180deg); }
  .cube__inner.show-4   { transform: translateZ(-110px) rotateY(  90deg); }
  .cube__inner.show-5    { transform: translateZ(-110px) rotateX( -90deg); }
  .cube__inner.show-6 { transform: translateZ(-110px) rotateX(  90deg); }

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

  .cube__face--1  {
    background-image: url("@/assets/norella/norella-offers.webp");
    background-size: cover;
  }
  .cube__face--3  {
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.95) 30%, rgba(252,70,107,0.8) 100%);
    display: flex;
    align-items: center;

    p {
      padding: .5rem;
    }
  }
  .cube__face--2  {
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(63,94,251,0.9) 15%, rgba(252,70,107,0.8) 100%);
  }
  .cube__face--2 {
    h4 {
      font-size: 1.2rem;
      padding: 1rem;
    }
    ul {
      list-style: none;

      li {
        margin-top: .2rem;
      }
    }
  }
  .cube__face--4  {
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
  .cube__face--5  {
    background-image: url("@/assets/norella/norella.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-color: rgba(63,94,251,.9);
    transition: background-color .2s ease-in-out;
  }
  .cube__face--6  {
    display: flex;
    background-color: rgba(63,94,251,.9);
    transition: background-size .2s ease-in-out, background-color .2s ease-in-out;

    video {
      width: 90%;
      margin: auto;
    }
  }
  .cube__face--5:hover {
    background-color:rgba(83, 76, 230, .9);
  }
  .cube__face--6:hover {
    background-size: 95%;
    background-color:rgba(83, 76, 230, .9);
  }
  .description {
    padding: .5rem;
  }

  .cube__face--1  { transform: rotateY(  0deg) translateZ(110px); }
  .cube__face--2  { transform: rotateY( 90deg) translateZ(110px); }
  .cube__face--3   { transform: rotateY(180deg) translateZ(110px); }
  .cube__face--4   { transform: rotateY(-90deg) translateZ(110px); }
  .cube__face--5    { transform: rotateX( 90deg) translateZ(110px); }
  .cube__face--6 { transform: rotateX(-90deg) translateZ(110px); }

  input {
    display: none;
  }
  .cube__nav {
    width: 75%;
    list-style-type: none;
    margin: auto;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    background-color: rgba(255,255,255,.9);
    box-shadow:
    rgba(255, 255, 255, 0.42) 0px 60px 123px -25px,
    rgba(255, 255, 255, 0.08) 0px 35px 75px -35px;
    border-radius: 10px;
  }
  .cube__nav li {
    text-align: center;
    margin-bottom: 1rem;
  }
  .cube__nav li label {
    display: block;
    transition: transform .2s ease-in-out;
    color: #333;
      
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
    .cube__inner {
      width: 400px;
      height: 400px;
      transform: translateZ(-220px);
    }
    .cube__inner {
        transform: translateZ(-220px) rotateY(-20deg) rotateX(30deg);
    }

    .cube__inner.show-1  { transform: translateZ(-220px) rotateY(   0deg); }
    .cube__inner.show-2  { transform: translateZ(-220px) rotateY( -90deg); }
    .cube__inner.show-3   { transform: translateZ(-220px) rotateY(-180deg); }
    .cube__inner.show-4   { transform: translateZ(-220px) rotateY(  90deg); }
    .cube__inner.show-5    { transform: translateZ(-220px) rotateX( -90deg); }
    .cube__inner.show-6 { transform: translateZ(-220px) rotateX(  90deg); }

    .cube__face {
      width: 400px;
      height: 400px;
    }

    .cube__face--1  { transform: rotateY(  0deg) translateZ(220px); }
    .cube__face--2  { transform: rotateY( 90deg) translateZ(220px); }
    .cube__face--3   { transform: rotateY(180deg) translateZ(220px); }
    .cube__face--4   { transform: rotateY(-90deg) translateZ(220px); }
    .cube__face--5    { transform: rotateX( 90deg) translateZ(220px); }
    .cube__face--6 { transform: rotateX(-90deg) translateZ(220px); }

    .cube__face--2 {
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

    .cube__face--3 {
      font-size: 2rem;
    }
    .cube__face--4 {
      a {
        font-size: 6rem;
      }
    }
    .cube__nav {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    .d-md-none {
      display: none;
    }
    .d-none {
      display: block;
    }
    .cube__nav {
      position: relative;
      z-index: -1;
      padding: 2rem 4rem;
      font-size: 2rem;
      width: auto;
      transform:
        perspective(600px)
        rotateY(15deg)
        translateX(0);
    }
  }

  @media (min-width: 992px) {
    .cube__nav {
      transform:
        perspective(1000px)
        rotateY(10deg)
        translateX(0);
      margin-right: 12rem;
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
    .cube__inner {
      width: 550px;
      height: 550px;
      transform: translateZ(-320px);
    }
    .cube__inner {
        transform: translateZ(-320px) rotateY(-20deg) rotateX(30deg);
    }

    .cube__inner.show-1  { transform: translateZ(-320px) rotateY(   0deg); }
    .cube__inner.show-2  { transform: translateZ(-320px) rotateY( -90deg); }
    .cube__inner.show-3   { transform: translateZ(-320px) rotateY(-180deg); }
    .cube__inner.show-4   { transform: translateZ(-320px) rotateY(  90deg); }
    .cube__inner.show-5    { transform: translateZ(-320px) rotateX( -90deg); }
    .cube__inner.show-6 { transform: translateZ(-320px) rotateX(  90deg); }

    .cube__face {
      width: 550px;
      height: 550px;
    }

    .cube__face--1  { transform: rotateY(  0deg) translateZ(320px); }
    .cube__face--2  { transform: rotateY( 90deg) translateZ(320px); }
    .cube__face--3   { transform: rotateY(180deg) translateZ(320px); }
    .cube__face--4   { transform: rotateY(-90deg) translateZ(320px); }
    .cube__face--5    { transform: rotateX( 90deg) translateZ(320px); }
    .cube__face--6 { transform: rotateX(-90deg) translateZ(320px); }

    .cube__face--2 {

      li {
        font-size: 3rem;
      }
    }

    .cube__face--back {
      font-size: 3rem;
    }
    .cube__face--4 {
      a {
        font-size: 8rem;
      }
    }
    .cube__nav {
      z-index: 1;
      font-size: 2.5rem;
      margin-right: 15rem;
    }
  }
}
</style>