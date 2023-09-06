<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Buttons from '../components/customComponents/Buttons.vue';
  import Message from '../components/customComponents/Message.vue';
  import Input from '../components/customComponents/Input.vue';
  import Gmap from '../components/customComponents/Gmap.vue';
  import Card from '../components/customComponents/Card.vue';
  
  const route = useRoute();

  onMounted(() => {
    const fragment = route.params.section;
    scrollToSection(fragment);
  });
const topPage = ref(null);
const buttonReview = ref(null);
const buttonSection = ref(null);
const inputSection = ref(null);
const apiSection = ref(null);

const sections = {
  topPage: topPage,
  buttonReview: buttonReview,
  buttonSection: buttonSection,
  inputSection: inputSection,
  apiSection: apiSection,
};

const scrollToSection = (sectionId) => {
  const sectionElement = sections[sectionId];
  if (sectionElement.value) {
    sectionElement.value.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<template>
  <div class="bg-gray-100">
    <div class="max-w-screen-md mx-auto py-8">      
    <section ref="topPage"></section>
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
          <li @click="scrollToSection('buttonSection')"><span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">Quote Message API:</span></li>
          <li @click="scrollToSection('apiSection')"><span class="border-b-2 border-blue-300 cursor-pointer hover:border-blue-600">Buttons increments</span></li>
        </ul>
    </div>
    
    <div class="bg-gray-200">
      <section ref="buttonReview">
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
      <section ref="inputSection">
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
      <section ref="apiSection">
        <div class="max-w-screen-md mx-auto py-8">      
          <h2 class="text-2xl mt-6">Quote API</h2>
          <p>Show random Quote via Api.  from https://api.api-ninjas.com/v1/quotes . Use Axios.</p>
          <p>Click button to load a new random quote</p>
          <Message />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section ref="buttonSection">
        <div class="max-w-screen-md mx-auto py-8">
          <h2 class="text-2xl mt-6">Button Increments</h2>
          <p>Add plus and minus button and increment/decrement on clcik. Hide minus button 
            if result is less 0.
          </p>
          <Buttons />
        </div>
      </section>
    </div>
  </div>
  </template>
  