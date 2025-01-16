import './assets/main.css';
import App from './App.vue';
import { createI18n } from "vue-i18n";
import en from "../src/locales/en.json";
import ar from "../src/locales/ar.json";
import router from "./router";
import { createApp } from "vue";
import 'primeicons/primeicons.css';

const savedLanguage = localStorage.getItem("language") || "en";

const i18n = createI18n({
  locale: savedLanguage,
  messages: {
    en: en,
    ar: ar,
  },
});

document.documentElement.setAttribute("dir", savedLanguage === "ar" ? "rtl" : "ltr");

const app = createApp(App);

app.mixin({
  watch: {
    "$i18n.locale"(newLocale) {
      localStorage.setItem("language", newLocale);
      document.documentElement.setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr");
    },
  },
});

app.use(router);
app.use(i18n);

app.mount("#app");
