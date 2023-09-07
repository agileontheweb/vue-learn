  <script setup> 

import { defineProps, defineEmits } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  title: String,
  price: Number
});

const emits = defineEmits();

const addToCart = () => {
    const item = {
      title: props.title,
      price: props.price,
      quantity: 1
    };
    emits('addToCart', item);
};
</script>
  
<template>
    <div class="product border-blue-400 border p-4 inline-block m-2">
        <p>{{ title }}</p>
        <p>Price: {{ price }}</p>
        <button class="w-full btn-primary" @click="addToCart">
          Add <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
    </div>
  </template>
  