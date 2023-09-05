<template>
       <div>
        <form class="bg-gray-300 p-6 " @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                <input id="name" v-model="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required>
            </div>
            <div class="mb-6">
                <label for="review" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review:</label>      
                <textarea id="review" v-model="review" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div class="mb-6">
                <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Rating</label>
                <select id="rating" required v-model="rating" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                </select>
            </div>
            <div class="mb-6">
                <input class="btn-primary" type="submit" value="Submit">
            </div>
            <div v-if="isSend" id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                </svg>
                <div class="pl-4 text-sm font-normal"><strong>Hey {{name}},</strong> your review was successfully submitted.</div>
            </div>
        </form>
    </div>
</template>

<script setup>
import SquareItem from './SquareItem.vue';

import { defineEmits } from 'vue';
import { ref } from 'vue';

const { emit } = defineEmits(['review-submitted']);
let isSend = ref(false);
const name = ref('');
const review = ref('');
const rating = ref(null);

const onSubmit = () => {
  const productReview = {
    name: name.value,
    review: review.value,
    rating: rating.value,
  };
  console.log(productReview);
  isSend.value = true;
};

import { defineProps } from 'vue';


const props = defineProps({
  productName: String,
  productDescription: String,
  images: Array,
});

</script>

