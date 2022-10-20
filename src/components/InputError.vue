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
}
</style>
