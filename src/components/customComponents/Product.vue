  <script setup> 

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  price: Number
});

const emits = defineEmits();

const addToCart = () => {
    const newMessage = `Aggiunto al carrello: ${props.title} `;
    const itemQuantity = 1;
    emits('addToCart', newMessage, itemQuantity);
};
</script>
  
<template>
    <div class="product border-blue-400 border p-4 inline-block m-2">
        <p>{{ title }}</p>
        <p>Price: {{ price }}</p>
        <button class="btn-primary" @click="addToCart">add</button>
    </div>
  </template>
  