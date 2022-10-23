<template>
  <transition name="fade">
    <div class="wrapper">
      <div>
        <p :style="{ color: color }">{{ text.p1 }}</p>
        <p :style="{ color: color }">{{ text.p2 }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'ModalFormInfo',
    props: {
        text: Object,
        color: String,
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  z-index: 100;

  div {
    font-size: 2rem;
    text-align: center;
    border-radius: .5rem;
    background-color: #ddd;
    padding: 1.5rem 3rem;

    p {
        margin-bottom: 1rem;
      }
  }

  &.fade-enter-active {
    animation-name: bounce-in-zoomout;
		animation-duration: 1s;
		animation-timing-function: ease;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
  }
  &.fade-leave-active {
    opacity: 0;
  }
}
</style>
