<template>
  <section>
    <transition name="fade"></transition>
      <ModalFormInfo
        v-show="this.showModalFormInfo"
        :text="modalFormSuccess ? this.modalSuccess : this.modalError"
        :color="modalFormSuccess ? 'green' : 'red'" 
      />
    <transition></transition>
    <div class="title">
      <h3>Get in touch</h3>
    </div>
    <div>
      <form id="form" method="POST">
        <input 
          id="name"
          type="text" 
          v-model="name"
          name="name"
          placeholder="Name"
        >
        <input
          id="email"
          type="email" 
          v-model="email"
          name="email"
          placeholder="Email"
          >
        <textarea
          id="message"
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
        </textarea>
        <div>
          <button @click="sendEmail">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import ModalFormInfo from '@/components/ModalFormInfo.vue';

export default {
  name: 'Form',
  components: {
    ModalFormInfo,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showModalFormInfo: false,
      modalFormSuccess: null,
      modalSuccess: {
        p1: 'Thank you!',
        p2: 'Email sent successfully.'
      },
      modalError: {
        p1: 'Ups!',
        p2: 'Something went wrong...'
      },
      modalFormInfoTimeout: 2000,
    };
  },
  methods: {
    toggleModalFormInfo(success) {
      success ? this.modalFormSuccess = true : this.modalFormSuccess = false;
      this.showModalFormInfo = !this.showModalFormInfo;
      setTimeout(() => this.showModalFormInfo = false, this.modalFormInfoTimeout);
    },
    sendEmail(e) {
      e.preventDefault();
      try {
        emailjs.sendForm('service_ityygsm', 'portfolio_1', '#form',
        process.env.VUE_APP_EMAILJS_USER_ID, {
          name: this.name,
          email: this.email,
          message: this.message
        });
        this.toggleModalFormInfo(true);
      } catch(error) {
          this.toggleModalFormInfo(false);
      };

      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
};
</script>

<style lang="scss" scope>
article {
  margin-bottom: 5rem;
}
.title {
  text-align: center;
  color: #ddd;
  padding: 2rem;
  font-size: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 2rem;
  box-shadow:
  rgba(22, 31, 39, 0.7) 0px 60px 123px -25px,
  rgba(19, 26, 32, 0.2) 0px 35px 75px -35px;
  border-radius: .5rem;

  input,
  textarea {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: .4rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid #aaa;
    color: #ddd;
    transition: .2s ease-in-out;
    
    &:focus {
      outline: none;
      border-color: #fff;
      color: #fff;
    }
  }
  textarea {
    border: 1px solid #aaa;
    margin-top: 1.5rem;
    border-radius: .5rem;
  }
  div {
    text-align: center;

    button {
      padding: .5rem 1rem;
      border-radius: .5rem;
      background: #ddd;
      color: #323;
      border: none;
    }
  }
}
</style>
