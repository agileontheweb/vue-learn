<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { imageSrcArrayOne, imageSrcArrayTwo } from '../components/customComponents/imageData.js';

  import Message from '../components/customComponents/Message.vue';
  import Input from '../components/customComponents/Input.vue';
  // import Gmap from '../components/customComponents/Gmap.vue';
  import Card from '../components/customComponents/Card.vue';
  import Product from '../components/customComponents/Product.vue';
  import Cart from '../components/customComponents/Cart.vue';
  import TopAlert from '../components/customComponents/TopAlert.vue'
  import Toast from '../components/customComponents/Toast.vue'
  import Crud from '../components/customComponents/Crud.vue'
  import scrollMixin from '../assets/scrollMixin.js';
  import { setMetaInfo } from '../assets/metaHelper.js';

  import { useI18n } from 'vue-i18n';
  import StripeItem from '../components/customComponents/stripe/StripeItem.vue';
  import StripeProducts from '../components/customComponents/stripe/StripeProducts.vue';

  const { t } = useI18n();
  const route = useRoute();
  const fragment = route.params.section || 'topPage';
  const pageTitle = ref(t('customComponent.meta.title'));
  const pageDescription = ref(t('customComponent.meta.description'));

  onMounted(() => {
    scrollMixin.methods.scrollToSection(fragment);
    setMetaInfo(pageTitle.value, pageDescription.value);
  });

  const topPage = ref(null);
  const buttonReview = ref(null);
  const buttonSection = ref(null);
  const inputSection = ref(null);
  const quoteSection = ref(null);
  const crudSection = ref(null);
  const stripeSection = ref(null);

  const sections = {
    topPage: topPage,
    buttonReview: buttonReview,
    buttonSection: buttonSection,
    inputSection: inputSection,
    quoteSection: quoteSection,
    crudSection: crudSection,
    stripeSection: stripeSection
  };

  const message = ref("Add Products in cart");
  const showToast = ref(false);

  const quantity = ref(0);
  const cartItems = ref([]);
  const totalItemCart = ref(0);

  const addToCartHandler = (item) => {
    const existingItem = cartItems.value.find((cartItem) => cartItem.title === item.title);

    if (existingItem) {
      existingItem.quantity += 1;

    } else {
      cartItems.value.push({ ...item, quantity: 1 });
    }

    showToast.value = true;
    totalItemCart.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
  };

  const closeToast = () => {
    showToast.value = false;
  };

  const updateTotalItemCart = (updatedQuantity) => {
    totalItemCart.value = updatedQuantity;
  };
</script>

<template>
  <div class="bg-gray-100">
    <section id="topPage"></section>

    <div class="container">
        <h1 class="text-3xl mt-6">
          {{ t('customComponent.h1') }}
        </h1>
        <p>{{ t('customComponent.description') }}</p>
        <p>{{ t('customComponent.listComponents') }}</p>
        <ul>
          <li @click="scrollMixin.methods.scrollToSection('buttonReview')">
            <RouterLink to="#">{{ t('customComponent.component_slide_image.h2') }}</RouterLink>
          </li>
          <li @click="scrollMixin.methods.scrollToSection('inputSection')">
            <RouterLink to="#">{{ t('customComponent.component_autocomplete.h2') }}</RouterLink>
          </li>
          <li @click="scrollMixin.methods.scrollToSection('quoteSection')">
            <RouterLink to="#">{{ t('customComponent.component_quote_api.h2') }}</RouterLink>
          </li>
          <li @click="scrollMixin.methods.scrollToSection('buttonSection')">
            <RouterLink to="#">{{ t('customComponent.component_buttons_cart.h2') }}</RouterLink>
          </li>
          <li @click="scrollMixin.methods.scrollToSection('crudSection')">
            <RouterLink to="#">{{ t('customComponent.component_crud.h2') }}</RouterLink>
          </li>
          <li @click="scrollMixin.methods.scrollToSection('stripeSection')">
            <RouterLink to="#">{{ t('customComponent.component_stripe.h2') }}</RouterLink>

          </li>
        </ul>
    </div>

    <div class="bg-gray-200">
      <section id="buttonReview" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <div class="mb-6">
            <h2>{{ t('customComponent.component_slide_image.h2') }}</h2>
            <p>{{ t('customComponent.slideImage.p_1') }}</p>
            <p>{{ t('customComponent.slideImage.p_2') }}</p>
            <p>{{ t('customComponent.slideImage.p_3') }}</p>
          </div>
          <Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/>
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section id="inputSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <h2>{{ t('customComponent.component_autocomplete.h2') }}</h2>
          <p>
            {{ t('customComponent.component_autocomplete.p_1') }}
            <a href="https://raw.githubusercontent.com/lmfmaier/cities-json/master/cities500.json">cities500.json</a>
          </p>
          <p v-safe-html="t('customComponent.component_autocomplete.p_2')"></p>
          <p v-safe-html="t('customComponent.component_autocomplete.p_3')"></p>
          <Input />
          <!-- <Gmap  /> -->
        </div>
      </section>
    </div>

    <div class="bg-gray-200">
      <section id="quoteSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <h2>{{ t('customComponent.component_quote_api.h2') }}</h2>
          <p v-safe-html="t('customComponent.component_quote_api.p_1')"></p>

          <p>Click button to load a new random quote</p>
          <Message />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section id="buttonSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <TopAlert :totalItemCart="totalItemCart" />
          <div class="border-b-2 py-6">
            <h2>{{ t('customComponent.component_buttons_cart.h2') }}</h2>
            <p>{{ t('customComponent.component_buttons_cart.p_1') }}</p>
            <Product :title="t('customComponent.component_buttons_cart.produtcs.shooes')" :price="79.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Product :title="t('customComponent.component_buttons_cart.produtcs.tshirt')" :price="39.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Product :title="t('customComponent.component_buttons_cart.produtcs.pants')" :price="19.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Toast :myprop="message" :showToast="showToast" @closeToast="closeToast" />
          </div>
          <div class="py-6">
            <h3>{{ t('customComponent.component_buttons_cart.h3') }}</h3>
            <p>{{ t('customComponent.component_buttons_cart.p_2') }}</p>
            <Cart :cartItems="cartItems" :totalItemCart="totalItemCart" @update-total-item-cart="updateTotalItemCart" />
          </div>
        </div>
      </section>

      <div class="bg-gray-200">
        <section id="crudSection" class="container">
          <div class="max-w-screen-md mx-auto py-8">
            <h2 class="mt-6">{{ t('customComponent.component_crud.h2') }} </h2>
            <p>{{ t('customComponent.component_crud.p_1') }}</p>
              <Crud />
          </div>
        </section>
      </div>

      <div class="bg-gray-300">
      <section id="stripeSection" class="container">
        <div class="max-w-screen-md mx-auto py-8" >
          <div>
            <h2>{{ t('customComponent.component_stripe.h2') }}</h2>
            <p v-safe-html="t('customComponent.component_stripe.p_1')"></p>
            <p>
              <a href="https://stripe.com/docs/testing">Dati</a>
            </p>
            <StripeProducts />
            <StripeItem :idPrice="'price_1NpvKGBI9AUPHPQbihmB2Zu4'" />
            <StripeItem :idPrice="'price_1NqDNPBI9AUPHPQbG23kVMQz'" />
          </div>
        </div>
      </section>
    </div>

    </div>
  </div>
  </template>
