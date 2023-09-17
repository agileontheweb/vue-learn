<template>
  <div>
    <h2>Lista prodotti Stripe</h2>
    <p>Aggiungi prodotti al carrello ed esegui il Checkout su Stripe </p>
    <div class="overflow-x-auto whitespace-nowrap">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-3 rounded-lg inline-block mx-2 my-2">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ formatPrice(product.price) }}</p>
        <img :src="product.images" alt="Immagine del prodotto" class="max-w-xs mx-auto" />
        <button class="btn-primary mt-3" @click="addToCart(product)">Aggiungi al Carrello</button>
      </div>
    </div>
    <div class="mt-10 text-center">
      <button class="btn-primary" @click="submit">Vai al Carrello!</button>
    </div>
    <Toast :myprop="message" :showToast="showToast" @closeToast="closeToast" />
  </div>
  
  <div v-if="isStripeCheckoutActive">
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="STRIPE_PUBLISHABLE_KEY"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
 import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { STRIPE_SECRET_KEY } from '../../../apikey';
import { STRIPE_PUBLISHABLE_KEY } from '../../../apikey';
import Toast from '../../../components/customComponents/Toast.vue';

const isStripeCheckoutActive = ref(false);

const showToast = ref(false);
const message = ref('Prodotto aggiunto');
const checkoutRef = ref(null);
const products = ref([]);
const lineItems = ref([]);
const loading = ref(false);
const successURL = 'http://localhost:5173/success';
const cancelURL = 'http://localhost:5173/cancel';

const submit = () => {
  isStripeCheckoutActive.value = true;
  for (const item of lineItems.value) {
    console.log(item.priceId +  " - " + item.quantity);
    
  }

  if (lineItems.value.length > 0) {
    checkoutRef.value.redirectToCheckout({
      lineItems: lineItems.value,
    });
  } else {
    console.error('Il carrello è vuoto. Aggiungi prodotti prima di procedere al pagamento.');
  }
};

const formatPrice = (price) => {
  if (!price) return '';
  const formattedPrice = (price / 100).toFixed(2);
  return `${formattedPrice} €`;
};

const loadProducts = async () => {
  try {
    const response = await fetch('https://api.stripe.com/v1/products', {
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      products.value = data.data;
      
      for (const product of products.value) {
        const priceId = product.default_price;
        if (priceId) {
          const priceResponse = await fetch(`https://api.stripe.com/v1/prices/${priceId}`, {
            headers: {
              Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
            },
          });
          if (priceResponse.ok) {
            const priceData = await priceResponse.json();
            product.price = priceData.unit_amount;
          } else {
            console.error(`Errore nel caricamento del prezzo per il prodotto ${product.id}`);
          }
        } else {
          console.warn(`Il prodotto ${product.id} non ha un prezzo predefinito.`);
        }
      }
    } else {
      console.error('Errore nel caricamento dei prodotti da Stripe');
    }
  } catch (error) {
    console.error('Errore nel caricamento dei prodotti:', error);
  }
};

const addToCart = (product) => {
  const priceId = product.default_price;

  if (priceId) {
    lineItems.value.push({
      price: priceId,
      quantity: 1,
    });
    showToast.value = true;
  } else {
    console.error(`Il prodotto ${product.id} non ha un prezzo predefinito valido.`);
  }
  console.log(product.default_price)
};


const closeToast = () => {
  showToast.value = false;
};

onMounted(() => {
  loadProducts();
});
</script>
