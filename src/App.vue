<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import FontAwesomeConfig from './components/FontAwesomeConfig.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  
  <div class=" bg-black text-white">
    <Navigation msg="Alessandro Cuoghi"/>
    <FontAwesomeConfig />
          <font-awesome-icon :icon="['fab', 'github']" class="mx-1" />
  </div>

  <RouterView />
  <footer class="bg-black">
    <div class="max-w-screen-md mx-auto py-8 text-white">
      <p>Alessandro Cuoghi - Example Vue Project</p>
     </div>
  </footer>
</template>
