<template>
  <a :href="this.mailTo" :class="[expanded ? 'expanded' : 'colapsed']">
    <transition-group name="fade">
      <span v-if="expanded" :class="[expanded ? 'expanded' : 'colapsed', 'text']">Contact</span>
      <span v-if="!expanded" :class="[expanded ? 'expanded' : 'colapsed', 'icon']">
        <font-awesome-icon :icon="['fa-regular', 'fa-envelope']"></font-awesome-icon>
      </span>
    </transition-group>
  </a>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      expanded: true,
      mailTo: 'mailto:contact@devpat.online?&bcc=patrykowo@gmail.com&subject=Interview',
    };
  },
  methods: {
    toggleBtn() {
      if(window.scrollY > 100 && this.expanded) this.expanded = false;
      else if(window.scrollY <= 100 && !this.expanded) this.expanded = true;
    },
  },
  created () {
    window.addEventListener('scroll', this.toggleBtn);
    this.toggleBtn();
  },
  destroyed () {
    window.removeEventListener('scroll', this.toggleBtn);
  },
}
</script>

<style lang="scss" scoped>
a {
  position: fixed;
  bottom: 3rem;
  right: 0;
  display: block;
  min-width: 7rem;
  height: 2.25rem;
  text-decoration: none;
  color: #fff;
  background-color: rgb(0, 72, 149);
  font-size: 1.25rem;
  text-align: center;
  border-radius: 1rem;
  transform-origin: center;
  transition: all .5s ease-in-out;
  z-index: 1000;
  overflow-x: hidden;

  &:hover {
    cursor: pointer;
    background-color: rgb(154, 5, 246);
  }

  @media (min-width: 576px) {
    bottom: 1.5rem;
  }
  &.expanded {
    transform: translateX(calc(-50vw + 3.5rem));
    min-width: 7rem;
  }
  &.colapsed {
    transform: translate(calc(-1rem), 2rem);
    min-width: 3rem;

    @media (min-width: 576px) {
      bottom: 3rem;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 1.75;
    min-width: 3rem;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
