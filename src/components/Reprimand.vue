<template>
  <p :class="this.reprimandTextOne ? 'one' : 'two'" >
    {{ this.reprimandTextOne ? this.reprimandTextOne : this.reprimandTextTwo }}
  </p>
</template>

<script>
export default {
  name: 'Reprimand',
  props: {
    reprimandTextOne: String,
    reprimandTextTwo: String,
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 2rem;
  &.one {
    color: #333;
  }
  &.two {
    color: red;
  }
}
</style>
