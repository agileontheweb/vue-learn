<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Header.vue'
</script>

<template>
  <header>
    <div class="container bg-black text-white">
      <HelloWorld msg="Alessandro Cuoghi"/>
    </div>
  </header>
  <RouterView />
</template>
