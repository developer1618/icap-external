<template>
  <div class="first-step flex h-screen">
    <div class="w-5/12 bg-[#048db7]">
      <img
        src="../../assets/img/coverage.jpg"
        alt="IMG"
        class="absolute m-auto bg-no-repeat w-5/12 h-screen"
      />
    </div>
    <div class="w-7/12">
      <section class="bg-[#DCF7FF]">
        <div
          class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <div
            class="second-step w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
          >
            <SendEmail />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Authorization from '../../components/Authorization.vue';
import ResetPassword from '../../components/ResetPassword.vue';
import SendEmail from '../../components/SendEmail.vue';

export default {
  layout: 'login',
  middleware: 'auth',
  auth: false,
  data() {
    return {
      typePassword: true,
      min: 6,
      max: 32,
      type: 1,
      email: '',
      password: '',
      error: false,
    };
  },
  created() {
    console.log(this.type);
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.error = false;
        this.$router.push('admin');
      } catch (err) {
        this.error = true;
      }
    },
  },
  watch: {
    email() {
      this.error = false;
    },
    password() {
      this.error = false;
    },
  },
  components: { SendEmail, ResetPassword, Authorization },
};
</script>
