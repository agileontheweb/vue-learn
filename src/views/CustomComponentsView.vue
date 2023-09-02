<template>
  <div class="border bg-gray-100">
    <div class="max-w-screen-md mx-auto py-8">      
        <h2 class="text-2xl mt-6">Custom Components</h2>
        <p>In this section i created some components to use in the project.</p>
        <Buttons />
        <SlideImages />
        
    </div>
  </div>

  </template>
  <script setup>
  import Buttons from '../components/customComponents/Buttons.vue';
  import SlideImages from '../components/customComponents/SlideImages.vue';
  </script>
  