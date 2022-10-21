<template>
  <section>
    <transition name="fade">
      <ModalFormInfo
        v-show="this.showModalFormInfo"
        :text="modalFormSuccess ? this.modalSuccess : this.modalError"
        :color="modalFormSuccess ? 'green' : 'red'" 
      />
    </transition>
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
          @input="validateName"
        >
        <div class="error">
          <transition name="fade">
            <InputError v-show="this.errors.name" :text="this.errors.name" />
          </transition>
        </div>
        <input
          id="email"
          type="email" 
          v-model="email"
          name="email"
          placeholder="Email"
          @input="validateEmail"
          >
        <div class="error">
          <transition name="fade">
            <InputError v-show="this.errors.email" :text="this.errors.email" />
          </transition>
        </div>
        <textarea
          id="message"
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message"
          @input="validateMessage"
          >
        </textarea>
        <div class="error">
          <transition name="fade">
            <InputError v-show="this.errors.message" :text="this.errors.message" />
          </transition>
        </div>
        <div>
          <button @click="submitForm">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import ModalFormInfo from '@/components/ModalFormInfo.vue';
import InputError from '@/components/InputError.vue';

export default {
  name: 'Form',
  components: {
    ModalFormInfo,
    InputError,
  },
  data() {
    return {
      errors: {
        name: null,
        email: null,
        message: null,
      },
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
      errorInputMsg: {
        name: {
          required: 'Please provide name.',
          lettersOnly: 'Name can contain letters only.',
        },
        email: {
          required: 'Please provide email.',
          invalid: 'Email not valid.',
        },
        message: {
          required: 'Please provide message.',
          length: 'Message must not contain more than 200 characters.'
        }
      },
      modalFormInfoTimeout: 2000,
    };
  },
  methods: {
    validateMessage() {
      if(this.message === '') this.errors.message = this.errorInputMsg.message.required;
      else if(this.message.length > 200) this.errors.message = this.errorInputMsg.message.length;
      else this.errors.message = null;

      return !this.errors.message;
    },
    validateEmail() {
      const regex = /\S+@\S+\.\S+/;
      if(this.email === '') this.errors.email = this.errorInputMsg.email.required;
      else if(!regex.test(this.email)) this.errors.email = this.errorInputMsg.email.invalid; 
      else this.errors.email = null;

      return !this.errors.email;
    },
    validateName() {
      const regex = /^[a-zA-Z\s]*$/;
      if(this.name === '') this.errors.name = this.errorInputMsg.name.required;
      else if(!regex.test(this.name)) this.errors.name = this.errorInputMsg.name.lettersOnly;
      else this.errors.name = null;

      return !this.errors.name;
    },
    toggleModalFormInfo(success) {
      success ? this.modalFormSuccess = true : this.modalFormSuccess = false;
      this.showModalFormInfo = !this.showModalFormInfo;
      setTimeout(() => this.showModalFormInfo = false, this.modalFormInfoTimeout);
    },
    sendEmail() {
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
    submitForm(e) {
      e.preventDefault();
      let valid = false;
      if(this.validateName()) valid = true;
      if(this.validateEmail()) valid = true;
      if(this.validateMessage()) valid = true;

      if(valid) this.sendEmail();
    }
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
  .error {
    min-height: 2rem;
    line-height: 2;
  }
  div {
    text-align: center;

    button {
      padding: .5rem 1rem;
      margin-top: .5rem;
      border-radius: .5rem;
      background: #ddd;
      color: #323;
      border: none;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from,
.fade-enter-to {
  opacity: 0;
}
</style>
