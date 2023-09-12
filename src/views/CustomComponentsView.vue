<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { imageSrcArrayOne, imageSrcArrayTwo } from '../components/customComponents/imageData.js';
  import Buttons from '../components/customComponents/Buttons.vue';
  import Message from '../components/customComponents/Message.vue';
  import Input from '../components/customComponents/Input.vue';
  // import Gmap from '../components/customComponents/Gmap.vue';
  import Card from '../components/customComponents/Card.vue';
  import Product from '../components/customComponents/Product.vue';
  import Cart from '../components/customComponents/Cart.vue';
  import TopAlert from '../components/customComponents/TopAlert.vue'
  import Toast from '../components/customComponents/Toast.vue'
  import Crud from '../components/customComponents/Crud.vue'
  
  import { useI18n } from 'vue-i18n';
  const pageTitle = ref('Componenti');
  const pageDescription = ref('Questa e la pagina componenti.');

  const { t } = useI18n();
  const route = useRoute();
  
  onMounted(() => {
    const fragment = route.params.section;
    scrollToSection(fragment);
    document.title = pageTitle.value;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription.value);
    }
  });



const topPage = ref(null);
const buttonReview = ref(null);
const buttonSection = ref(null);
const inputSection = ref(null);
const quoteSection = ref(null);
const crudSection = ref(null);


const sections = {
  topPage: topPage,
  buttonReview: buttonReview,
  buttonSection: buttonSection,
  inputSection: inputSection,
  quoteSection: quoteSection,
  crudSection: crudSection,
};

const scrollToSection = (sectionId) => {
  const sectionElement = sections[sectionId];
  if (sectionElement.value) {
    sectionElement.value.scrollIntoView({ behavior: 'smooth' });
  }
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
    <section ref="topPage"></section>
    <div class="container">      
        <h1 class="text-3xl mt-6">
          {{ t('customComponent.h1') }}
        </h1>
        <p>{{ t('customComponent.description') }}</p>
        <p>{{ t('customComponent.listComponents') }}</p>
        <ul>
          <li @click="scrollToSection('buttonReview')">
            <a>{{ t('customComponent.component_slide_image') }}</a>
          </li>
          <li @click="scrollToSection('inputSection')">
            <a>{{ t('customComponent.component_autocomplete.title') }}</a>
          </li>
          <li @click="scrollToSection('quoteSection')">
            <a>{{ t('customComponent.component_quote_api') }}</a>
          </li>
          <li @click="scrollToSection('buttonSection')">
            <a>{{ t('customComponent.component_buttons_cart') }}</a>
          </li>
          <li @click="scrollToSection('crudSection')">
            <a>{{ t('customComponent.component_crud') }}</a>
          </li>
        </ul>
    </div>
    
    <div class="bg-gray-200">
      <section ref="buttonReview" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <div class="mb-6">
            <h2>{{ t('customComponent.component_slide_image') }}</h2>
            <p>
              {{ t('customComponent.slideImage.p_1') }}
            </p>
            <p>
              <code>
                &lt;Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/&gt;
              </code>
            </p>
            <p>
              {{ t('customComponent.slideImage.p_2') }}
            </p>
            <p>
              {{ t('customComponent.slideImage.p_3') }}
            </p>
          </div>
          <Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/>
        </div>
      </section>
    </div>
    
    <div class="bg-white">
      <section ref="inputSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">      
          <h2>{{ t('customComponent.component_autocomplete.title') }}</h2>
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
      <section ref="quoteSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">      
          <h2>{{ t('customComponent.component_quote_api.title') }}</h2>
          <p v-safe-html="t('customComponent.component_quote_api.p_1')"></p>
          
          <p>Click button to load a new random quote</p>
          <Message />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section ref="buttonSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <TopAlert :totalItemCart="totalItemCart" />
          <div class="border-b-2 py-6">
            <h3>Cart Buttons: </h3>
            <p>Add product + Show Toast + Show Alert
            </p>
            <Product :title="'Shooes'" :price="79.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Product :title="'Tshirt'" :price="39.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Product :title="'Pants'" :price="19.99" @addToCart="addToCartHandler" :showToast="showToast" />
            <Toast :myprop="message" :showToast="showToast" @closeToast="closeToast" />
          </div>

          <div class="py-6">
            <h3>Cart Section: </h3>
            <p>Showed products to with Cart Buttons. Add remove button. Update total procuts cart
            </p>
            <Cart :cartItems="cartItems" :totalItemCart="totalItemCart" @update-total-item-cart="updateTotalItemCart" />
          </div>
        
        </div>
      </section>

      <div class="bg-gray-200">
        <section ref="crudSection" class="container">
          <div class="max-w-screen-md mx-auto py-8">
            <h2 class="mt-6">CRUD </h2>
            <p>Add, Modify, Remove Item. Use CRUD and FIREBASE</p>
              <Crud />
          </div>
        </section>
      </div>
    </div>
  </div>
  </template>
  