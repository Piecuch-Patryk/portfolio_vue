<template>
  <div class="hangman">
    <div>
      <h3>Hangman Game</h3>
      <p>Single page, fully responsive JavaScript game build with Vue 3. Choose a category and difficulty level and let the game begin.</p>
      <p>Take a chance and don't hang yourself.</p>
      <div class="link-wrap">
        <a href="http://devpat.online/projects/hangman" target="_blank">Let's PLAY</a>
      </div>
    </div>
    <div>
      <img src="@/assets/hangman/responsive.png" alt="Responsive game design showed on different devices.">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hangman',
}
</script>

<style lang="scss" scoped>
.hangman {
  color: #ddd;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  .link-wrap {
    padding: 1rem;

    a {
      color: #662D91;
    }
  }
  img {
    width: 100%;
  }
}
</style>