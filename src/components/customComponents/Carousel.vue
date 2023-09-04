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

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>