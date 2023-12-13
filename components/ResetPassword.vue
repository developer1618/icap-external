<template>
  <div
  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
  >
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
    >
    Создание нового пароля
    </h1>
    <p class="text-center pb-8">
      Пожалуйста, введите новый пароль для
     <br> входа в систему. Используйте комбинацию
     <br> цифр, строчных и заглавных букв. 
    </p>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="space-y-4 md:space-y-6"
        @submit.prevent="handleSubmit(reset)"
      >
        
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
    layout: "reset",
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
            error: false,
        };
    },
    methods: {
        async reset() {
            try {
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
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
    },
};
</script>