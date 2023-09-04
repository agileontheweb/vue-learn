<script setup>
  import { ref } from 'vue';
  import Buttons from '../components/customComponents/Buttons.vue';
  import Message from '../components/customComponents/Message.vue';
  import Input from '../components/customComponents/Input.vue';
  import Gmap from '../components/customComponents/Gmap.vue';
  import Card from '../components/customComponents/Card.vue';
  
const buttonReview = ref(null);
const buttonSection = ref(null);
const inputSection = ref(null);
const apiSection = ref(null);

const sections = {
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
  <div class="bg-gray-200">
    <div class="max-w-screen-md mx-auto py-8">      
        <h1 class="text-3xl mt-6">Custom Components</h1>
        <p>I created some components to use in the project.</p>
        <p> This is a List:</p>
        
        <ul class="list-inside mt-10">
          <li class="p-3 " @click="scrollToSection('buttonReview')"><span class="border-b-2 border-red-300 cursor-pointer hover:border-green-400">Slide Image + Form Review</span></li>
          <li class="p-3 " @click="scrollToSection('buttonSection')"><span class="border-b-2 border-red-300 cursor-pointer hover:border-green-400">Button</span></li>
          <li class="p-3 " @click="scrollToSection('inputSection')"><span class="border-b-2 border-red-300 cursor-pointer hover:border-green-400">Input AutoComplete</span></li>
          <li class="p-3 " @click="scrollToSection('apiSection')"><span class="border-b-2 border-red-300 cursor-pointer hover:border-green-400">Api Message</span></li>
        </ul>
    </div>
    
    <div class="bg-gray-200">
      <section ref="buttonReview">
        <div class="max-w-screen-md mx-auto py-8">
          <div class="mb-6">
            <h2 class="text-2xl mt-6">Slide Image + Form Review</h2>
            <p>Leave review product. Pass title, description and array images</p>
          </div>
          <Card productName="Product 1" productDescription="Description 1 " :images="imageSrcArrayOne"/>
          <Card productName="Product 2" productDescription="Description 2 " :images="imageSrcArrayTwo"/>
        </div>
      </section>
    </div>
    

    <div class="bg-white">
      <section ref="inputSection">
        <div class="max-w-screen-md mx-auto py-8">      
          <Input />   
          <Gmap  />
        </div>
      </section>
    </div>

    <div class="bg-gray-200">
      <section ref="apiSection">
        <div class="max-w-screen-md mx-auto py-8">      
          <Message />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <section ref="buttonSection">
        <div class="max-w-screen-md mx-auto py-8">
          <Buttons />
        </div>
      </section>
    </div>
  </div>
  </template>
  