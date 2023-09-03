<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  
  <div class=" bg-black text-white">
    <Navigation msg="Alessandro Cuoghi"/>
  </div>

  <RouterView />
</template>
