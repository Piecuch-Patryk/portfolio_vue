<template>
  <carousel-3d :width="width" :height="450">
    <slide v-for="(slide, i) in slides" :index="i" :key="i" :class="(i === 2) ? 'video-wrapper' : ''">
      <div v-if="(i === 0)" class="description">
        <div>
          <h3>Chef Goods</h3>
          <h4 class="subtitle">(under development)</h4>
          <p>Restaurant's website build with Laravel and VueJS. The backend shares data through the RestAPI and Vue consume it to display to user. Customer can book a table, browse menu and add review. Relational database helps to manage and display products, categories and table booking.</p>
          <p>The website's still under development and some features aren't available yet.</p>
        </div>
      </div>
      <div v-if="(i === 1)" class="links">
        <div>
          <h5>Technologies</h5>
          <ul class="technologies-list">
            <li>Laravel 9</li>
            <li>Vue 3</li>
            <li>RestAPI</li>
            <li>Relational database</li>
          </ul>
        </div>
        <div>
          <ul class="links-list">
            <li>
              <a href="http://devpat.online/projects/chefgoods" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fa-solid', 'fa-globe']"></font-awesome-icon>
              </a>
            </li>
            <li>
              <a href="http://github.com/Piecuch-Patryk/cheffgoods" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="(i === 2)" class="video">
        <video 
            src="@/assets/chefgoods/mainpage.mp4"
            loop
            autoplay
            muted
            preload="auto"
          ></video>
      </div>
    </slide>
  </carousel-3d>
</template>

<script>
export default {
  name: 'Restaurant',
  data() {
    return {
      slides: 3,
      width: 200,
    }
  },
  methods: {
    handleResize() {
      if(window.innerWidth <= 576) return this.width = 200 
      if(window.innerWidth >= 578) return this.width = 400 
      if(window.innerWidth >= 769) return this.width = 500 
      console.log(window.innerWidth)
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }
}
</script>

<style lang="scss" scoped>
.carousel-3d-slider {

  .carousel-3d-slide {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    border: none;
    color: #333;
    text-align: center;

    .description {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: .5rem;

      h3 {
        font-size: 1.4rem;
      }
      h4 {
        margin-bottom: .4rem;
      }
      p {
        line-height: 1.2;
        letter-spacing: .5px;
      }
      .subtitle {
        font-size: .8rem;
      }
    }
    
    .links {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: .5rem;

      div {
        margin: 1rem 0;
      }
      .technologies-list {
        li {
          margin-bottom: 1rem;
        }
      }
      h5 {
        font-size: 1.4rem;
        margin: .5rem 0;
      }

      ul {
        list-style: none;
      }

      .links-list {
        display: flex;
        justify-content: space-around;
        font-size: 2rem;

        a {
          color: #333;
        }
      }
    }
    
    &.video-wrapper {
      background: none;
    }
    .video {
      video {
        width: 100%;
      }
    }
  }
}
</style>