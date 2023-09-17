<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';
import { setMetaInfo } from '../assets/metaHelper.js';
import { useRouter } from 'vue-router'; // Importa useRouter

const { t, locale } = useI18n();
const router = useRouter();

const pageTitle = ref('');
const pageDescription = ref('');

const changeLanguage = (newLocale) => {
  locale.value = newLocale;
  const currentPage = router.currentRoute.value;
  let titleKey = '';
  let descriptionKey = '';
  
  switch (currentPage.name) {
    case 'thisProject':
      titleKey = `thisProject.meta.title`;
      descriptionKey = `thisProject.meta.description`;
      break;
    case 'customComponents':
      titleKey = `customComponent.meta.title`;
      descriptionKey = `customComponent.meta.description`;
      break;
    case 'about':
      titleKey = `bio.meta.title`;
      descriptionKey = `bio.meta.description`;
      break;
    default:
      break;
  }

  pageTitle.value = t(titleKey, { locale: newLocale });
  pageDescription.value = t(descriptionKey, { locale: newLocale });
  setMetaInfo(pageTitle.value, pageDescription.value);
};

const myFace = ref(null);

onMounted(() => {
  
    gsap.from(myFace.value, {
      opacity: 0,
      duration: 3,
      ease: 'power2.out',
    });
    
    gsap.set(".logo-vue", {
      y: 0,
      opacity:0
    });
    
    gsap.to(".logo-vue", { 
      rotationY: 360,
      ease: "circ.out",
      duration: 5,
      opacity: 1,
      // repeat: -1,
      repeatDelay: 0 
    })



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
      <font-awesome-icon
      ref="logoVue"
      :icon="['fab', 'vuejs']"
      class="text-green-600 text-4xl mt-3 logo-vue" />
    <nav>    
      <div class="inline-block h-10 px-3 justify-center py-2 mt-4 border-green-100/30 border rounded-full ">
        <button
          class="mx-2 hover:text-green-500"
          :class="{ 'lang-active': locale === 'it' }"
          @click="changeLanguage('it')">
          ITA
        </button>
        <button
          class="mx-2 hover:text-green-500"
          :class="{ 'lang-active': locale === 'en' }"
          @click="changeLanguage('en')">
          ENG
        </button>
        <button
          class="mx-2 hover:text-green-500"
          :class="{ 'lang-active': locale === 'es' }"
          @click="changeLanguage('es')">
          ESP
        </button>
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
    </ul>
    </nav>
  </div>
</template>
