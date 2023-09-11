import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import messagesEn from './locales/en.json';
import messagesIt from './locales/it.json';
import messagesEs from './locales/es.json';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

library.add(faVuejs);

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
  app.component('font-awesome-icon', FontAwesomeIcon);
  app.mount('#app');
  