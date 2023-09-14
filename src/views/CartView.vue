<template>
    <div class="border bg-gray-100">
        <div class="container">  
            <h2>Carrello</h2>
            <ul>
                <li v-for="product in cart" :key="product.id" class="border">
                {{ product.name }} - {{ formatPrice(product.price) }}
                <img :src="product.images" alt="Immagine del prodotto" class="w-20   mx-auto"/>
                </li>
            </ul>
            <button class="btn-primary mt-3" @click="checkoutWithStripe">Paga</button>
        </div>
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';
  import cart from '../assets/cartStore.js';
  import axios from 'axios';
  
  const formatPrice = (price) => {
    if (!price) return '';
    const formattedPrice = (price / 100).toFixed(2);
    return `${formattedPrice} €`;
  };
  
  const checkoutWithStripe = async () => {
    // Inizializza Stripe con la tua chiave segreta
    const stripe = await loadStripe('pk_test_51NpqzhBI9AUPHPQbUTZ2IusI2u85InPMzu4Sid3rm17vh24mtDZ6bc32zpERJbpD28lQNkvMGr6k9238RyPTYo0E00imJONV4s');
  
    // Esegui il checkout con Stripe
    const lineItems = cart.value.map((product) => ({
      price: product.priceId,
      quantity: 1,
    }));
  
    try {
        const response = await axios.post('http://localhost:5173/cart/create-payment', { amount: 1000, lineItems });
    const clientSecret = response.data.clientSecret;
      // Crea una sessione di pagamento con Stripe
      const session = await stripe.checkout.createSession({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/success', // URL di successo dopo il pagamento
        cancel_url: 'http://localhost:5173/cancel', // URL di annullamento
      });
  
      // Reindirizza l'utente alla pagina di checkout di Stripe
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
  
      if (error) {
        console.error('Errore durante il redirect al checkout di Stripe:', error);
      }
    } catch (error) {
      console.error('Errore durante la richiesta al server o il checkout con Stripe:', error);
    }
  };
  </script>
  
  