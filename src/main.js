import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import messagesEn from './locales/en.json';
import messagesIt from './locales/it.json';
import messagesEs from './locales/es.json';

const i18n = createI18n({
    legacy: false,
    locale: 'it',
    fallbackLocale: 'it',
    messages: {
      en: messagesEn,
      it: messagesIt,
      es: messagesEs,
    },
  });
    
  
  const app = createApp(App);
  app.use(router);
  app.use(i18n);
  app.mount('#app');
  