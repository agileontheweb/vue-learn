<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import FontAwesomeConfig from './components/FontAwesomeConfig.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import App from './App.vue';
// import { createApp } from 'vue';
</script>

<template>
  <div>
    <div class="bg-gradient-to-tl from-slate-900 to-slate-700 text-white">
      <Navigation/>
    </div>
    <FontAwesomeConfig />
    <RouterView />
    <Footer class="bg-gradient-to-br from-slate-900 to-slate-700 text-white" />
  </div>
</template>
