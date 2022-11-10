<template>
  <div class="hangman">
    <div class="text-wrap fade-in">
      <h3>Hangman Game</h3>
      <p>Single page, fully responsive JavaScript game build with Vue 3. Choose a category and difficulty level and let the game begin.</p>
      <p>Take a chance and don't hang yourself.</p>
      <a href="http://devpat.online/projects/hangman" target="_blank">Let's PLAY</a>
    </div>
    <div class="fade-in">
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

  .text-wrap {
    padding-bottom: 2rem;
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
  }
  img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .hangman {
    max-width: 70%;
  }
}

@media (min-width: 1000px) {
  .hangman {
    max-width: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;

    .text-wrap {
      p {
        width: 50%;
        margin: 1rem auto 0 auto;

        &:last-of-type {
          margin-bottom: 2rem;
        }
      }
    }
    div {
      width: 50%;
      text-align: center;

      img {
        width: 80%;
      }
    }
  }
}
</style>