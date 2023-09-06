<!-- Cart.vue -->
<template>
  <div class="product border-blue-400 border p-4 inline-block m-2">
        <p>{{ title }}</p>
        <p>Quantity in Cart: {{ quantity }}</p>
    </div>
  </template>
  
<script setup>
  import { ref, defineProps } from 'vue';
  const quantity = ref(0);
  </script>
  