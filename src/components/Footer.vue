<template>
  <footer>
      <p>Design & Coding</p>
      <p>Patryk Piecuch &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  z-index: 3;
  color: #ddd;
  text-align: center;
  font-size: .7rem;
  font-weight: 300;
  margin-top: 4rem;
  
  p {
    margin-bottom: .5rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
    margin-top: 5rem;
  }
}
</style>
