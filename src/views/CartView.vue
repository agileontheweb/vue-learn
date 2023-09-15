
   <template>
    <div class="border bg-gray-100">
        <div class="container">  
            <h2>Carrello</h2>
            <ul>
              

                <li v-for="product in cart" :key="product.id" class="border">
                {{ product.name }}
                <!-- - {{ formatPrice(product.price) }} -->
                <img :src="product.images" alt="Immagine del prodotto" class="w-20   mx-auto"/>
                </li>
            </ul>
            <!-- <button class="btn-primary mt-3" @click="checkoutWithStripe">Paga</button> -->
        </div>
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
        <Toast :myprop="message" :showToast="showToast" @closeToast="closeToast" />
        </div>
  </template>
  

  <script setup>
  import cart from '../assets/cartStore.js';
  // import { StripeCheckout } from '@vue-stripe/vue-stripe'; //rompe route nella navigazione
  import { ref, onMounted } from 'vue';
  import { STRIPE_PUBLISHABLE_KEY } from '../apikey';
  import { STRIPE_SECRET_KEY } from '../apikey';
  
const secretKey = STRIPE_SECRET_KEY;
const selectedItem = ref(null);
const publishableKey = STRIPE_PUBLISHABLE_KEY;
const loading = ref(false);

  const successURL = 'http://localhost:5173/success';
  const cancelURL = 'http://localhost:5173/cancel';

  const checkoutRef = ref(null);

  
  const submit = () => {
  checkoutRef.value.redirectToCheckout();

};

</script>