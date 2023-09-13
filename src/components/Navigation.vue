<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';
import { setMetaInfo } from '../assets/metaHelper.js';

const { t, locale } = useI18n();
const pageTitle = ref('');
const pageDescription = ref('');

const changeLanguage = (newLocale) => {
  locale.value = newLocale;
  pageTitle.value = t(`bio.meta.title`, { locale: newLocale });
  pageDescription.value = t(`bio.meta.description`, { locale: newLocale });
  setMetaInfo(pageTitle.value, pageDescription.value);
};

const myFace = ref(null);
  onMounted(() => {
    gsap.from(myFace.value, {
      opacity: 0,
      duration: 3,
      ease: 'power2.out',
    });
    
    gsap.set("nav ul li", {
      y: 100,
      opacity:0
    });

    gsap.to("nav ul li", {
      y: 0,
      stagger: 0.1,
      opacity:1
    });
    
  });
</script>

<template>
  <div class="py-12 text-center container">
    <img
      ref="myFace"
      src="https://alessandrocuoghi.com/img/foto_io-small.jpg" 
      alt="Alessandro Cuoghi"
      class="my-face">
      <div class="text-3xl uppercase my-6 font-semibold ">
        {{ t('Custom.brand') }}
      </div>
      <font-awesome-icon :icon="['fab', 'vuejs']" class="text-green-600 text-4xl mt-3" />
    <nav>    
      <div class="inline-block h-10 px-3 justify-center py-2 mt-4 border-green-100/30 border rounded-full ">
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('it')">ITA</button>
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('en')">ENG</button>
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('es')">ESP</button>
      </div>
      <ul class="flex justify-center gap-4 mt-10">
        <li
            :class="{ 'btn-active': $route.path === '/' }">
            <RouterLink to="/">{{ t('Nav.project') }}</RouterLink>
        </li>
        <li
            :class="{ 'btn-active': $route.path === '/customComponents' }">  
            <RouterLink :to="{ name: 'customComponents' }">{{ t('Nav.components') }}</RouterLink>
        </li>
        <li
            :class="{ 'btn-active': $route.path === '/about' }">
            <RouterLink :to="{ name: 'about' }">{{ t('Nav.about') }}</RouterLink>
        </li>
        <li>
          <a href="https://github.com/agileontheweb/vue-learn/" target="_blank" rel="noopener">Github</a>
        </li>
    </ul>
    </nav>
  </div>
</template>
