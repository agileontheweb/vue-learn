<template>
  <div>
    <h2>LISTA PRODOTTI STRIPE</h2>
    <div v-for="product in products" :key="product.id" class="bg-white p-3 rounded-lg my-2">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ formatPrice(product.price) }}</p>
      <img :src="product.images" alt="Immagine del prodotto" class="max-w-xs  mx-auto"/>
      <button class="btn-primary mt-3" @click="addToCart(product)">Aggiungi al Carrello</button>
    </div>
    <RouterLink :to="{ name: 'cart' }" class="btn-primary mt-3">Vai al Carrello</RouterLink>
  </div>
</template>


<script setup>
import cart from '../../assets/cartStore';
import { ref, onMounted, provide } from 'vue';
import { useRouter } from 'vue-router';
const secretKey = 'sk_test_51NpqzhBI9AUPHPQbGd3Ac7fNHJd1jNzplYWWJxjcAqQmQ8uZFPpvkEMYfrpECNymF2PgCd6MsYoCebeZEkx6eymx00ZXNYXdiB';
const products = ref([]);

const formatPrice = (price) => {
  if (!price) return '';
  const formattedPrice = (price / 100).toFixed(2);
  return `${formattedPrice} €`;
};

const addToCart = (product) => {
  cart.value.push(product);
  console.log(product)
};


const loadProducts = async () => {
  try {
    // Carica i prodotti da Stripe usando la tua chiave pubblica
    const response = await fetch('https://api.stripe.com/v1/products', {
      headers: {
        Authorization: `Bearer ${secretKey}`,
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
              Authorization: `Bearer ${secretKey}`,
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

onMounted(() => {
  loadProducts();
});
</script>
