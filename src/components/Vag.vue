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
            Commercial project, designed and build from scratch with Laravel 9.
          </p>
          <div>
            <button @click="this.modalActive = true" class="btn">Read more</button>
          </div>
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

  <div v-show="modalActive" class="modal">
    <button @click="this.modalActive = false">&times;</button>

    <div class="section">
      <h3>VAG Autoserwis - summary</h3>
    </div>

    <div class="section">
      <h4>Description</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit quos vitae aliquam esse. Inventore saepe eum error, nostrum quaerat consequatur cumque laborum quibusdam! Minima quo tenetur id animi amet!</p>
    </div>

    <div class="section">
      <h4>Client Requirements</h4>
      <ul>
        <li>Design the whole app with graphics, content and SEO</li>
        <li>Build the app with suitable technology</li>
        <li>Must be user-friendly and fast loading</li>
        <li>CRUD - categories, services, products</li>
        <li>Change categories' order with drag&drop</li>
        <li>Each category has many products (relational database)</li>
        <li>PDF creator - logged in user can create invoice document</li>
        <li>Amount is calculated based on the products' price and quantity</li>
        <li>Store documents in database</li>
        <li>Guest can search for a document and download if found</li>
        <li>Documents for guest are encrypted and the customer gets the password to be able to read it</li>
        <li>Documents for logged in user are decrypted</li>
        <li>Contact form sends messages via email</li>
        <li>Guests can leave reviews</li>
      </ul>
    </div>

    <div class="section admin">
      <h4>Admin Panel</h4>
      <ul>
        <li>
          <h5>Manage categories, products and sevices.</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, eligendi veniam at delectus totam magni quae distinctio neque dolores, harum architecto nostrum facilis laborum, corporis alias repellendus quibusdam dolorum doloremque?</p>
          <img src="@/assets/vag/category.webp" alt="">
        </li>
        <li>
          <h5>Simply create and manage invoices</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, eligendi veniam at delectus totam magni quae distinctio neque dolores, harum architecto nostrum facilis laborum, corporis alias repellendus quibusdam dolorum doloremque?</p>
          <img src="@/assets/vag/create_invoice.webp" alt="">
        </li>
        <li>
          <h5>Browse invoices or search for a specific one</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, eligendi veniam at delectus totam magni quae distinctio neque dolores, harum architecto nostrum facilis laborum, corporis alias repellendus quibusdam dolorum doloremque?</p>
          <img src="@/assets/vag/browse_invoice.webp" alt="">
        </li>
        <li>
          <h5>Generate and download invoice</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, eligendi veniam at delectus totam magni quae distinctio neque dolores, harum architecto nostrum facilis laborum, corporis alias repellendus quibusdam dolorum doloremque?</p>
          <img src="@/assets/vag/pdf.webp" alt="">
        </li>
      </ul>
    </div>

    <div class="section">
      <div class="inner">
        <h4>Mobile Performance Tests</h4>
        <img src="@/assets/vag/test-mobile.webp" alt="mobile website performance tests result">
      </div>
      <div class="inner">
        <h4>Desktop Performance Tests</h4>
        <img src="@/assets/vag/test-desktop.webp" alt="desktop website performance tests result">
      </div>
    </div>

    <div class="section links">
      <a href="https://devpat.online/projects/vag/public/index.php" target="_blank">
        <span>
          <font-awesome-icon :icon="['fa-solid', 'fa-globe']"></font-awesome-icon>
        </span>
        Website
      </a>
      <a href="https://github.com/Piecuch-Patryk/vag-autoservice" target="_blank">
        <span>
          <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" />
        </span>
        Github
      </a>
    </div>

    <div class="close">
      <button @click="this.modalActive = false">&times;</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Vag',
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    cubeVagInit() {
      const cube = document.querySelector('.cube__vag');
      const radioGroup = document.querySelector('.cube__nav__vag');
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
    this.cubeVagInit();
  },
}
</script>

<style lang="scss" scoped>
.wrapper.vag {
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
    background: rgba(0,0,0, .9);
    background: radial-gradient(circle,rgba(0,0,0,0.7) 45%, rgba(144,4,12,0.5) 75%, rgba(227,6,19,0.5) 88%);
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
    background-image: url("@/assets/vag/vag-main-lg.webp");
    background-size: cover;
    box-shadow: inset 0 0 10px #fff;
  }
  .cube__face--3  {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(144,4,12,0.5) 75%, rgba(227,6,19,0.5) 88%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 10px #fff;

    p {
      padding: .5rem;
      margin-bottom: 1rem;
    }

    .btn {
      border: none;
      padding: .5rem 1rem;
      border-radius: .2rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .cube__face--2  {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(144,4,12,0.5) 75%, rgba(227,6,19,0.5) 88%);
  }
  .cube__face--2 {
    box-shadow: inset 0 0 10px #fff;

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
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(144,4,12,0.5) 75%, rgba(227,6,19,0.5) 88%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 10px #fff;

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
    background-color: rgba(0,0,0,.9);
    transition: background-color .2s ease-in-out;
    box-shadow: inset 0 0 10px #fff;
  }
  .cube__face--6  {
    display: flex;
    background-color: rgba(0,0,0,.9);
    transition: background-size .2s ease-in-out, background-color .2s ease-in-out;
    box-shadow: inset 0 0 10px #fff;

    video {
      width: 90%;
      margin: auto;
    }
  }
  .cube__face--5:hover {
    background-color: rgb(0,0,0);

  }
  .cube__face--6:hover {
    background-size: 95%;
    background-color: rgb(0,0,0);

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

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: .5rem;
    padding: 1rem;
    overflow: auto;
    z-index: 10010;

    .section {
      margin-bottom: 2rem;
      letter-spacing: 1.2px;
      line-height: 1.2;
      box-shadow: 0 .5rem 1rem rgba(0,0,0, .15);
      padding: .5rem;
      border-radius: .5rem;

      &.admin {
        box-shadow: none;

        ul {
          list-style-type: none;
          padding: 0;
          li {
            margin-bottom: 2rem;
            box-shadow: 0 .5rem 1rem rgba(0,0,0, .15);
            padding: 1rem .5rem;
          }
        }
      }

      &.links {
        display: flex;
        justify-content: space-around;

        a {
          text-align: center;
          color: #000;

          span {
            display: block;
            font-size: 2.5rem;
          }
        }
      }

      h4 {
        margin-bottom: .5rem;
        font-size: 1.2rem;
      }

      ul {
        padding: 1rem;

        li {
          margin-bottom: .8rem;
          line-height: 1;
          font-size: 1rem;

          h5 {
            font-size: 1rem;
          }

          p {
            padding: 1rem 0;
            line-height: 1.5;
            letter-spacing: 1.3px;
          }
        }
      }

      .inner {
        text-align: center;
        padding: 1rem;
      }
      
      img {
        width: 100%;
      }
    }

    button {
        position: absolute;
        top: .5rem;
        right: 1rem;
        border: 1px solid #000;
        border-radius: 100%;
        width: 2rem;
        line-height: 2rem;
        background: none;
        font-size: 2rem;
        
      &:hover {
        cursor: pointer;
      }      
    }

    .close {
      margin-bottom: 1rem;
      text-align: center;

      button {
        position: relative;
        top: auto;
        right: auto;
      }
    }
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

      .btn {
        font-size: 1.5rem;
      }
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

    .modal {
      width: 70%;
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

    .modal {
      width: 60%;
    }
  }
}
</style>