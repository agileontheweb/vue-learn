<script setup>
  import Buttons from '../components/customComponents/Buttons.vue';
  import Message from '../components/customComponents/Message.vue';
  import Input from '../components/customComponents/Input.vue';
  import Gmap from '../components/customComponents/Gmap.vue';
  import Form from '../components/customComponents/Form.vue';
  </script>

<template>
  <div class="bg-gray-200">
    <div class="max-w-screen-md mx-auto py-8">      
        <h1 class="text-3xl mt-6">Custom Components</h1>
        <p>In this section i created some components to use in the project.</p>
    </div>
    <div class="bg-gray-200">
      <div class="max-w-screen-md mx-auto py-8">
        <Form  />
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-screen-md mx-auto py-8">      
        <Input />   
        <Gmap  />
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="max-w-screen-md mx-auto py-8">      
        <Message />
      </div>
    </div>
    <div class="bg-white">
      <div class="max-w-screen-md mx-auto py-8">
        <Buttons />
      </div>
    </div>
  </div>
  </template>
  
  