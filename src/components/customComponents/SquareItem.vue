<template>
    <div class="bg-white p-1">
        <Carousel :images="images"/>
    </div>
  </template>

<script setup>
import Carousel from './Carousel.vue';
import { defineProps } from 'vue';

const props = defineProps({
  images: Array,
});

</script>
