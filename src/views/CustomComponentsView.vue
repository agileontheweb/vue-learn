<script setup>
  import Buttons from '../components/customComponents/Buttons.vue';
  
  import Message from '../components/customComponents/Message.vue';
  import Gmap from '../components/customComponents/Gmap.vue';
  </script>

<template>
  <div class="border bg-gray-100">
    <div class="max-w-screen-md mx-auto py-8">      
        <h2 class="text-2xl mt-6">Custom Components</h2>
        <p>In this section i created some components to use in the project.</p>

    <div class="bg-white">
      <div class="max-w-screen-md mx-auto py-8">      
        <Input />   
        <Gmap  />
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="max-w-screen-md mx-auto py-8">      
        <Message />
        <Buttons />
        
    </div>
  </div>
  </template>
  
  