<template>
    <div>
      <StripeCheckout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="loading = $event"
      />
      <button class="btn-primary" @click="submit">Pay now!</button>
        <p>
            https://stripe.com/docs/testing
        </p>
      <p>
        Usa come carta: 4000002500003155
      </p>
      <p>
        Usa come carta scaduta: 4000000000009995
      </p>
      <p>
        CVC: 3 cifre qualsiasi
      </p>
      <p>
        DATA: Qualsiasi futura
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
  import { STRIPE_PUBLISHABLE_KEY } from '../../apikey';
  const publishableKey = STRIPE_PUBLISHABLE_KEY;
  const loading = ref(false);
  
  const lineItems = [
    {
      price: 'price_1NqDNPBI9AUPHPQbG23kVMQz',
      quantity: 1,
    },
  ];
  
  const successURL = 'http://localhost:5173/success';
  const cancelURL = 'http://localhost:5173/cancel';
  
  const checkoutRef = ref(null);
  
  const submit = () => {
    checkoutRef.value.redirectToCheckout();
  };
  </script>
  
  <script>
  import { defineProps } from 'vue';
  
  export default {
    components: {
      StripeCheckout,
    },
    props: defineProps(['publishableKey', 'lineItems', 'successURL', 'cancelURL']),
  }
  </script>
  