<script setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
defineProps({
  msg: {
    type: String,
    required: true
  }
})

const changeLanguage = (newLocale) => {
  locale.value = newLocale;
};

</script>

<template>
  <div class="py-12 text-center container">
    <h1 class="text-3xl uppercase">{{ msg }}</h1>
    
    <nav>
    <nav>    
      <div class="inline-block h-10 px-3 justify-center py-2 mt-4 border-green-100/30 border rounded-full ">
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('it')">{{ t('ITA') }}</button>
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('en')">{{ t('ENG') }}</button>
        <button class="mx-2 hover:text-green-500" @click="changeLanguage('es')">{{ t('ESP') }}</button>
      </div>
      <ul class="flex justify-center gap-4 mt-10">
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/' }">
          <RouterLink to="/">This project</RouterLink>
        </li>
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/customComponents/topPage' }">
          
          <RouterLink :to="{ name: 'customComponents', params: { section: 'topPage' } }">Custom Components</RouterLink>
        </li>
        <li class="border px-3 text-sm" :class="{ 'border-blue-300 text-blue-300': $route.path === '/about/topPage' }">
          <RouterLink :to="{ name: 'about', params: { section: 'topPage' } }">About</RouterLink>
        </li>
        <li class="border px-3 text-sm">
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Github</a>
        </li>
    </ul>
    </nav>
    
  </div>
</template>
