import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  confirmed,
  alpha_spaces,
  between,
  min_value,
  image,
  mimes,
} from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("required", {
  ...required,
  message: "Данные не заполнены",
});

extend("email", {
  ...email,
  message: "Укажите валидный email",
});
extend("min", {
  ...min,
  message: "Минимальная длина номера 9",
});
extend("max", {
  ...max,
  message: "Максимальная длина номера 9",
});
extend("confirmed", {
  ...confirmed,
  message: "Оба поля должны совпадать",
});
extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Введите только буквы",
});
extend("image", {
  ...image,
  message: "Добавьте только изображения!",
});
extend("mimes", {
  ...mimes,
  message: "Добавьте только ПАРТНЁРЫ!",
});
extend("confirmed", {
  ...confirmed,
  message: "Пароль не совпадает!",
});
