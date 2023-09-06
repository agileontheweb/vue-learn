<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import FontAwesomeConfig from './components/FontAwesomeConfig.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import { createApp } from 'vue';
</script>

<template>
  <div>
    <div class=" bg-black text-white">
      <Navigation msg="Alessandro Cuoghi"/>
    </div>
    <FontAwesomeConfig />
    <RouterView />
    <footer class="bg-black">
      <div class="max-w-screen-md mx-auto py-8 text-white">
        <p>Alessandro Cuoghi - Example Vue Project 
          <font-awesome-icon :icon="['fab', 'github']" class="mx-1" />
      </p>
      </div>
    </footer>
  </div>
</template>
