<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  
  <div class=" bg-black text-white">
    <Navigation msg="Alessandro Cuoghi"/>
  </div>

  <RouterView />
  <footer class="bg-black">
    <div class="max-w-screen-md mx-auto py-8 text-white">
      <p>Alessandro Cuoghi - Example Vue Project</p>
     </div>
  </footer>
</template>
