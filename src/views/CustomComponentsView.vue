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

  const route = useRoute();
  
  onMounted(() => {
    const fragment = route.params.section;
    scrollToSection(fragment);
  });

// const imageSrcArrayOne = [
//   { src: "https://picsum.photos/id/237/1024/800" },
//   { src: "https://picsum.photos/id/238/1024/800" },
//   { src: "https://picsum.photos/id/239/1024/800" },
// ];

// const imageSrcArrayTwo = [
//   { src: "https://picsum.photos/536/354" },
//   { src: "https://picsum.photos/233/356" },
//   { src: "https://picsum.photos/536/354" },
// ];

const topPage = ref(null);
const buttonReview = ref(null);
const buttonSection = ref(null);
const inputSection = ref(null);
const quoteSection = ref(null);

const sections = {
  topPage: topPage,
  buttonReview: buttonReview,
  buttonSection: buttonSection,
  inputSection: inputSection,
  quoteSection: quoteSection,
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
        <h1 class="text-3xl mt-6">Custom Components</h1>
        <p>I created some components to use in the project.</p>
        <p> This is a List of Components:</p>
        <ul>
          <li @click="scrollToSection('buttonReview')">
            <span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">
              Slide Image + Form Review
            </span>
          </li>
          <li @click="scrollToSection('inputSection')"><span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">AutoComplete + API: Air Quality</span></li>
          <li @click="scrollToSection('quoteSection')"><span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">Quote Message API:</span></li>
          <li @click="scrollToSection('quoteSection')"><span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">Buttons</span></li>
        </ul>
    </div>
    
    <div class="bg-gray-200">
      <section ref="buttonReview" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <div class="mb-6">
            <h2 class="text-2xl mt-6">Slide Image + Form Review</h2>
            <p>
              In this components i can pass some params like title, description
              and array images.
            </p>
            <p>
              <code>
                &lt;Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/&gt;
              </code>
              <code>
                &lt;Card productName="Product 2" productDescription="Description 2 " :images="imageSrcArrayTwo"/&gt;
              </code>
            </p>
            <p>
              Inside Card i added two components.
              </p>
              <p>
              <code>
                &lt;SquareItem :images="images"/&gt;
                <br>
                &lt;Form /&gt;
              </code>
            </p>
            <p>
              Inside SquareItem is it Carousel component:
            </p>
            <p>
              <code>
                &lt;Carousel :images="images"/&gt;
              </code>
            </p>        
            <p>
              The Form instead, after complete and click submit show a message
              with the name input .
            </p>
          </div>
          <Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/>
          <Card productName="Product 2" productDescription="Description 2 " :images="imageSrcArrayTwo"/>
        </div>
      </section>
    </div>
    
    <div class="bg-white">
      <section ref="inputSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">      
          <h2>AutoComplete + API: Air Quality</h2>
          <p>
            In this components show the air quality  of the city via API.
            Entering the name of the city does a search for cities using the json file 
            "https://raw.githubusercontent.com/lmfmaier/cities-json/master/cities500.json"
          </p>
          <p>
            After load the city and click one, call the API "https://api.api-ninjas.com/v1/airquality"
            and get data.
          </p>
          <p>
            I showed also a Chart of data.
          </p>
          <p>
            Disabled GMAP: <i>You must enable Billing on the Google Cloud Project
            at https://console.cloud.google.com/project/_/billing/enable </i>
          </p>
          <Input />   
          <!-- <Gmap  /> -->
        </div>
      </section>
    </div>

    <div class="bg-gray-200">
      <section ref="quoteSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">      
          <h2 class="text-2xl mt-6">Quote API</h2>
          <p>Show random Quote via Api.  from https://api.api-ninjas.com/v1/quotes . Use Axios.</p>
          <p>Click button to load a new random quote</p>
          <Message />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section ref="buttonSection" class="container">
        <div class="max-w-screen-md mx-auto py-8">
          <h2 class="text-2xl mt-6">Button </h2>
          <div class="border-b-2 py-6">
            <h3>Increment/Decrement</h3>
            <p>Add plus and minus button and increment/decrement on clcik.
              Hide minus button  if result is less 0.
            </p>
            <Buttons :quantity="1" :showButtons="true"/>
          </div>

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
            <!-- <Cart :cartItems="cartItems" /> -->
            <!-- <Cart :cartItems="cartItems" :totalItemCart="totalItemCart" /> -->
            <Cart :cartItems="cartItems" :totalItemCart="totalItemCart" @update-total-item-cart="updateTotalItemCart" />

            <!-- <Cart :cartItems="cartItems" :updatedQuantity="updatedQuantity" /> -->

          </div>
        
        </div>
      </section>

      <div class="bg-white">
        <section ref="crudSection" class="container">
          <div class="max-w-screen-md mx-auto py-8">
            <h2 class="text-2xl mt-6">Crud FireBase </h2>
              <Crud />
          </div>
        </section>
      </div>
    </div>
  </div>
  </template>
  