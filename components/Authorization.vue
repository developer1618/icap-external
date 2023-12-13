<template>
  <div
  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
  >
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
    >
      Авторизация
    </h1>
    <p class="text-center">
      Пожалуйста, введите свои учетные <br />
      данные для входа
    </p>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="space-y-4 md:space-y-6"
        @submit.prevent="handleSubmit(login)"
      >
        <div class="pb-4">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-700"
            >Язык</label
          >
          <select
            id="countries"
            v-model="default_lang"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Язык"
          >
            <option value="RU" selected>Русский</option>
            <option value="KK" class="rounded-lg">Казахский</option>
          </select>
        </div>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="pb-8">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Введите Email"
            />
            <p class="text-red-600 absolute">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="relative pb-8">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-700"
              >Пароль</label
            >
            <input
              :type="typePassword ? 'password' : 'text'"
              name="password"
              id="password"
              v-model="password"
              placeholder="Введите пароль"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <img
                src="/img/eye-pass-on.svg"
                v-if="typePassword"
                @click="typePassword = !typePassword"
                alt="on"
                class="cursor-pointer"
              />
              <img
                src="/img/eye-pass-off.svg"
                v-else
                alt="off"
                @click="typePassword = !typePassword"
                class="cursor-pointer"
              />
            </div>
            <p class="text-red-600 pb-4 absolute">
              {{ errors[0] }}
            </p>
            <p class="text-red-600 pb-4 absolute" v-if="error">
              Неверный логин или пароль!
            </p>
          </div>
        </ValidationProvider>
        <div
          class="flex items-center justify-between pb-4 m-0"
          style="margin-top: 0"
        >
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-700"
                >Запомнить меня</label
              >
            </div>
          </div>
          <a
            href="/send-email"
            @click="showSecondStep = true"
            class="text-sm font-medium hover:underline text-gray-700"
            >Забыли пароль?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-[#038DB7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Войти
        </button>
      </form>
    </ValidationObserver>
  </div>
  </div>
</template>
<script>
export default {
    layout: "login",
    middleware: 'auth',
    auth:false,
    data() {
        return {
            typePassword: true,
            min: 4,
            max: 32,
            type:1,
            email: "",
            password: "",
            default_lang: "RU",
            error: false,
        };
    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password,
                        default_lang: this.default_lang,
                    },
                });
                this.error = false;
                this.$router.push("main");
            }
            catch (err) {
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
        default_lang() {
            this.error = false;
        },
    },
};
</script>