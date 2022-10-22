<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'InputError',
  props: {
    text: String,
  }
};
</script>

<style lang="scss" scoped>
p {
  color: red;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
}
</style>
