<template>
    <div class="bg-white rounded-lg p-3 my-6">        
        <div v-if="loading" class="text-center">
          Caricamento in corso...
        </div>
        <h2 v-if="selectedItem">{{ selectedItem.name }}</h2>
        <p v-if="selectedItem">Descrizione: {{ selectedItem.description }}</p>
        <p v-if="selectedItem">Prezzo: {{ formatPrice(selectedItem.price) }}</p>
        <img v-if="selectedItem" :src="selectedItem.images" alt="Immagine del prodotto" class="max-w-xs  mx-auto"/>
        
        <div v-if="isStripeCheckoutActive">
        <StripeCheckout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="loading = $event"
        />
        </div>
        <button class="btn-primary" @click="submit">Pay now!</button>
    </div>
  </template>
  
<script setup>
    import { StripeCheckout } from '@vue-stripe/vue-stripe'; //rompe route nella navigazione
  import { ref, onMounted } from 'vue';
  import { STRIPE_PUBLISHABLE_KEY } from '../../../apikey';
  import { STRIPE_SECRET_KEY } from '../../../apikey';
  const isStripeCheckoutActive = ref(false);
  const secretKey = STRIPE_SECRET_KEY;
  const selectedItem = ref(null);
  const publishableKey = STRIPE_PUBLISHABLE_KEY;
  const loading = ref(false);
  const productPrice = ref(0);
  const { idPrice } = defineProps(['idPrice']);

  const formatPrice = (price) => {
    if (!price) return '';
    const formattedPrice = (price / 100).toFixed(2);
    return `${formattedPrice} €`;
  };
  
  const getItemAndPrice = async (priceId) => {
    try {
        loading.value = true;
      const productResponse = await fetch('https://api.stripe.com/v1/products', {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      });
  
      if (productResponse.ok) {
        const productData = await productResponse.json();
        console.log(productData)
        const product = productData.data.find((item) => item.default_price === priceId);

        selectedItem.value = {
          name: product.name,
          description: product.description,
          images: product.images,
          price: await getPrice(priceId),
        };
      } else {
        console.error('Errore nel caricamento dei prodotti da Stripe');
      }
    } catch (error) {
      console.error('Errore nel caricamento dei prodotti:', error);
    } finally {
        loading.value = false;
  }
  };
  
  const getPrice = async (priceId) => {
    try {
      const response = await fetch(`https://api.stripe.com/v1/prices/${priceId}`, {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      });
  
      if (response.ok) {
        const priceData = await response.json();
        return priceData.unit_amount;
      } else {
        console.error(`Errore nel caricamento del prezzo con ID ${priceId}`);
        return null;
      }
    } catch (error) {
      console.error('Errore nel caricamento del prezzo:', error);
      return null;
    }
  };

const submit = () => {
  isStripeCheckoutActive.value = true;
  checkoutRef.value.redirectToCheckout();
};

const lineItems = [
  {
    price: idPrice,
    quantity: 1,
  }
];

const successURL = 'http://localhost:5173/success';
const cancelURL = 'http://localhost:5173/cancel';

const checkoutRef = ref(null);

const productPriceFormatted = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
}).format(productPrice);
  
  onMounted(() => {
    getItemAndPrice(idPrice);
  });
  </script>
  