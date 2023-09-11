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
        <li
            :class="{ 'btn-active': $route.path === '/' }">
            <RouterLink to="/">{{ t('Nav.project') }}</RouterLink>
        </li>
        <li
            :class="{ 'btn-active': $route.path === '/customComponents/topPage' }">  
            <RouterLink :to="{ name: 'customComponents', params: { section: 'topPage' } }">{{ t('Nav.components') }}</RouterLink>
        </li>
        <li
            :class="{ 'btn-active': $route.path === '/about/topPage' }">
            <RouterLink :to="{ name: 'about', params: { section: 'topPage' } }">{{ t('Nav.about') }}</RouterLink>
        </li>
        <li>
          <a href="https://github.com/agileontheweb/vue-learn/" target="_blank" rel="noopener">Github</a>
        </li>
    </ul>
    </nav>
    
  </div>
</template>
