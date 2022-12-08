<template>
  <carousel-3d :width="width" :height="400">
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
import useBreakpoints from "vue-next-breakpoints";

export default {
  name: 'Restaurant',
  data() {
    return {
      slides: 3,
      width: this.xs,
      xs: 150,
      sm: 200,
      md: 300,
      lg: 450,
      xl: 550,
    }
  },
  setup() {
    const breakpoints = useBreakpoints({
      xs: 350,
      sm: [400],
      md: [768],
      lg: [992],
      xl: [1200],
    });
    return {
      breakpoints
    };
  },
  created() {
    this.breakpoints.xs.on("enter", (mq) => this.width = this.xs)
    this.breakpoints.sm.on("enter", (mq) => this.width = this.sm)
    this.breakpoints.md.on("enter", (mq) => this.width = this.md)
    this.breakpoints.lg.on("enter", (mq) => this.width = this.lg)
    this.breakpoints.xl.on("enter", (mq) => this.width = this.xl)

    this.breakpoints.xs.on("leave", (mq) => this.width = this.xs)
    this.breakpoints.sm.on("leave", (mq) => this.width = this.sm)
    this.breakpoints.md.on("leave", (mq) => this.width = this.md)
    this.breakpoints.lg.on("leave", (mq) => this.width = this.lg)
    this.breakpoints.xl.on("leave", (mq) => this.width = this.xl)
  },
  mounted() {
    if (this.breakpoints.sm.matches) this.width = this.sm
    if (this.breakpoints.md.matches) this.width = this.md
    if (this.breakpoints.lg.matches) this.width = this.lg
    if (this.breakpoints.xl.matches) this.width = this.xl

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