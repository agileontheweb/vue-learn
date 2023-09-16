


<template>
    <div>
      <div v-for="(product, index) in products" :key="index">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">Aggiungi al carrello</button>
      </div>
      <button @click="openStripeCheckout">Paga su Stripe</button>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { Stripe } from 'stripe';
import { STRIPE_SECRET_KEY } from '../apikey';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

  const secretKey = STRIPE_SECRET_KEY;
  const stripePromise = loadStripe(secretKey);

  const products = ref([
    {
      id: 'price_1NqDNPBI9AUPHPQbG23kVMQz',
      name: 'Prodotto 1',
      price: 10.00,
    },
    {
      id: 'price_1NpvKGBI9AUPHPQbihmB2Zu4',
      name: 'Prodotto 2',
      price: 20.00,
    },
  ]);

  const stripe = Stripe(secretKey);

  // Esempio di gestione di un pagamento tramite Axios
// 

  
  onMounted(() => {
  // Iniziaizza Stripe qui, sostituisci 'YOUR_STRIPE_SECRET_KEY' con la tua chiave segreta
  const stripe = new Stripe(secretKey);

    });

  const cart = ref([]);
  
  const addToCart = (product) => {
    cart.value.push(product);
  }; 


  </script>
  
