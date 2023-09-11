<template>
 <carousel :items-to-show="1.5">
    <slide v-for="image in images " :key="image">
    <div class="carousel__item">
        <img :src="image.src" alt="Image" class="object-cover mx-auto">
    </div>
    </slide>
    <template #addons>
    <navigation />
    <pagination />
    </template>
</carousel>

</template>

<script setup>
import { ref, defineProps } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  images: Array,
});

const components = {
  Carousel,
  Slide,
  Pagination,
  Navigation,
};
</script>