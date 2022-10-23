<template>
  <BackgroundImage />
  <Header />
  <Button />
  <About />
  <Main />
  <Form />
  <Footer />
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage.vue';
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import About from '@/components/About.vue';
import Main from '@/components/Main.vue';
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    BackgroundImage,
    Header,
    Button,
    About,
    Main,
    Form,
    Footer,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
  font-family: sans-serif;
}
#app {
  overflow-x: hidden;
}

@keyframes bounce {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: 
      perspective(1000px)
      rotateY(10deg)
      translateY(-45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(-24px);
	}

	65% {
		animation-timing-function: ease-in;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(-12px);
	}

	82% {
		animation-timing-function: ease-in;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(-6px);
	}

	93% {
		animation-timing-function: ease-in;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(-4px);
	}

	25%,
	55%,
	75%,
	87% {
		animation-timing-function: ease-out;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform:
      perspective(1000px)
      rotateY(10deg)
      translateY(0px);
	}
}

@keyframes shake {
	0% {
		transform: translate(0);
	}

	10% {
		transform: translate(-2px, -2px);
	}

	20% {
		transform: translate(2px, -2px);
	}

	30% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(2px, 2px);
	}

	50% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, -2px);
	}

	70% {
		transform: translate(-2px, 2px);
	}

	80% {
		transform: translate(-2px, -2px);
	}

	90% {
		transform: translate(2px, -2px);
	}

	100% {
		transform: translate(0);
	}
}

@-webkit-keyframes hinge {
  0% {
      -webkit-transform: rotate(0);
      -webkit-transform-origin: top left; 
      -webkit-animation-timing-function: ease-in-out;
  }
  20%, 60% {
      -webkit-transform: rotate(80deg); 
      -webkit-transform-origin: top left; 
      -webkit-animation-timing-function: ease-in-out;
  }
  40% {
      -webkit-transform: rotate(60deg);
      -webkit-transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
  }
  80% {
      -webkit-transform: rotate(60deg) translateY(0);
      opacity: 1; 
      -webkit-transform-origin: top left; 
      -webkit-animation-timing-function: ease-in-out;
  }
  99% {
    -webkit-transform: translateY(500px);
    opacity: 0;

  }
  100% {
      -webkit-transform: translateY(0);
      opacity: 0;
  }
}

  @keyframes hinge {
  0% { 
      transform: rotate(0); 
      transform-origin: top left; 
      animation-timing-function: ease-in-out; 
  }
  20%, 60% { 
      transform: rotate(80deg); 
      transform-origin: top left; 
      animation-timing-function: ease-in-out; 
  }
  40% { 
      transform: rotate(60deg); 
      transform-origin: top left; 
      animation-timing-function: ease-in-out;
  }
  80% { 
      transform: rotate(60deg) translateY(0); 
      opacity: 1; 
      transform-origin: top left; 
      animation-timing-function: ease-in-out; 
  }
  99% {
    transform: translateY(500px); 
    opacity: 0;

  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

@keyframes jello {
	0% {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(0.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, 0.95, 1);
	}

	100% {
		transform: scale3d(1, 1, 1);
	}
}

@keyframes bounce-in-zoomout {
  0% {
    transform:scale(0);
    animation-timing-function:ease-in;
    opacity:0;
  }
  35% {
    transform:scale(1);
    animation-timing-function:ease-out;
    opacity:1;
  }
  55% {
    transform:scale(.7);
    animation-timing-function:ease-in;
  }
  70% {
    transform:scale(1);
    animation-timing-function:ease-out;
  }
  80% {
    transform:scale(.84);
    animation-timing-function:ease-in;
  }
  90% {
    transform:scale(1);
    animation-timing-function:ease-out;
  }
  95% {
    transform:scale(.95);
    animation-timing-function:ease-in;
  }
  100% {
    transform:scale(1);
    animation-timing-function:ease-out;
  }
}
</style>
