<template>
  <div class="border">        
    <div v-if="cartItems.length === 0">Il carrello è vuoto.</div>
    <div v-else>
      <p>
        <strong>Total Products in the cart: <span class="text-2xl text-green-500">
          {{ totalItemCart }}</span>
        </strong>
      </p>
      <div v-for="(item, id) in cartItems" :key="id" class=" p-4 m-2 flex ">
        <div class="border w-full p-3">
          <p><strong>{{ item.title }}</strong></p>
          <p>Price: {{ item.price }}</p>
          <p>
            
          Quantity: 
          <span>{{ item.quantity }}</span>
          <Buttons
            :quantity="item.quantity"
            :showButtons="item.showButtons"
            @quantity-updated="updateQuantity(id, $event)"/>
          </p>
        </div>
        <button @click="removeFromCart(id)" class="btn-remove"> remove
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
      <strong>Total Price: ${{ totalPrice.toFixed(2) }}</strong>
    </div>
    </div>
  </template>
  
<script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import Buttons from './Buttons.vue';

  const props = defineProps({
    quantity: Number,
    cartItems: Array
  });
  
  const totalItemCart = ref();
  const emits = defineEmits();
  const totalPrice = ref(0);

  watch(props.cartItems, (newCartItems) => {
    totalPrice.value = newCartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    totalItemCart.value = newCartItems.reduce((total, item) => total + item.quantity, 0);
  });

  const removeFromCart = (index) => {
    props.cartItems.splice(index, 1);    
    emits('cartUpdated', props.cartItems.length);
  };
  
  const updateQuantity = (index, newQuantity) => {
    props.cartItems[index].quantity = newQuantity;
  };

  </script>
  